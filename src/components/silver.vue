<template>
  <div v-if="islodingvalue" class="loading">loding...</div>
  <section v-else class="silver">
    <form>
      <label class="label-Usdet" for="Usdet">Usdet: </label>
      <input
        class="get-Usdet"
        v-model="Usdet"
        type="number"
        id="Usdet"
        placeholder="how much is Usdet"
      />
      <br />
      <button class="calculator-silver-rial" @click.prevent="culatorSilverRial">Calculate</button>
    </form>

    <div>
      <h1 class="price-ounce">{{ `ounce silver ${ounceSilver} $ ` }}</h1>
      <h1 class="price-geram">{{ `gram silver ${gramSilver} $ ` }}</h1>
      <h1 class="price-geram-real">
        {{ `Price silver ${PriceSilverRial} ` }}<span v-if="showRial">ريال</span>
      </h1>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { api } from '/src/axios/api.js'

const ounceSilver = ref('')
const gramSilver = ref('')
const PriceSilverRial = ref('')
const Usdet = ref(null)

const islodingvalue = ref(true)
const showRial = ref(false)

async function getSilver() {
  try {
    const res = await api.get('XAG')
    const data = await res.data

    ounceSilver.value = data.price

    gramSilver.value = Math.round(data.price / 31.103)
    islodingvalue.value = false
  } catch (error) {
    console.log(error, `this is error for api  silver `)
  }
}

function culatorSilverRial() {
  const calculatorGramSilverUsde = gramSilver.value * Usdet.value
  PriceSilverRial.value = calculatorGramSilverUsde
  showRial.value = true
}

onMounted(() => {
  getSilver()
})
</script>

<style scoped lang="scss">
@import '@/assets/varebels.scss';

.silver {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  font-weight: bold;
  min-height: 80vh;
}

.label-Usdet {
  color: $clo-black;
  font-weight: bold;
  font-size: large;
  border-radius: $-size-10;
  cursor: pointer;
}

.get-Usdet {
  padding: 5px 20px;
  border-radius: $-size-10;
  margin: $-size-20;
  border: solid 1px $clo-primery;
  cursor: pointer;
  &:focus {
    outline: solid 1px $clo-primery;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}
.calculator-silver-rial {
  padding: 8px 117px;
  border-radius: $-size-10;
  border: solid 1px $clo-gray-border;
  color: $clo-white;
  background-color: $clo-primery;
  cursor: pointer;
  &:hover {
    background-color: $clo-primery;
    opacity: 0.8;
  }
}

.price {
  font-weight: bold;
  font-size: larger;
  &-ounce {
    color: $clo-ounce;
  }
  &-geram {
    color: $clo-gram-usde;
  }
  &-geram-real {
    color: $clo-gram-rial;
  }
}
</style>
