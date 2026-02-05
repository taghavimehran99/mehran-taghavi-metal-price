<template>
  <div v-if="isLoginValid" class="loading">loding....</div>
  <section v-else class="gold">
    <form>
      <label class="label-Usdet" for="Usdet">Usdet :</label>
      <input
        class="get-Usdet"
        v-model="Usdet"
        type="number"
        id="Usdet"
        placeholder="how much is Usdet"
      />
      <br />
      <button class="calculator-gold-rial" @click.prevent="calculatorGoldRial">Calculate</button>
    </form>
    <div>
      <h1 class="price-ounce">
        {{ `ounce of global gold ${globalGoldPrice} $.` }}
      </h1>
      <h1 class="price-geram">{{ `Gram 24-karat Gold ${gramGold24} $` }}</h1>
      <h1 class="price-geram">{{ `Gram 18-karat Gold ${gramGold18} $` }}</h1>
      <h1 class="price-geram-real">
        {{ `Gram 18-karat Gold  ${gramGoldReal18}` }} <span v-if="showRial">ريال</span>
      </h1>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { api } from '@/axios/api.js'

const globalGoldPrice = ref(null)
const gramGold24 = ref(null)
const gramGold18 = ref(null)
const gramGoldReal18 = ref('')
const Usdet = ref(null)

const isLoginValid = ref(true)
const showRial = ref(false)

const calculatorGoldRial = computed(() => {
  const calculatorgram18 = gramGold18.value * Usdet.value
  gramGoldReal18.value = calculatorgram18
  showRial.value = false
})

async function getGold() {
  try {
    const res = await api.get('XAU')
    const data = await res.data

    globalGoldPrice.value = Math.round(data.price)
    isLoginValid.value = false

    function calculatorGlobalGold() {
      const twentyFourGram = Math.round(globalGoldPrice.value / 31.103)
      const eighteenGram = Math.round((globalGoldPrice.value / 31.103 / 24) * 18)

      gramGold24.value = twentyFourGram
      gramGold18.value = eighteenGram
    }

    calculatorGlobalGold()
  } catch (error) {
    console.log('this is error for api ', error)
  }
}

onMounted(() => {
  getGold()
})
</script>

<style scoped lang="scss">
@import '@/assets/varebels.scss';
.gold {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
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
  color: black;
  font-weight: bold;
  font-size: large;
  border-radius: 10px;
  cursor: pointer;
}

.get-Usdet {
  padding: 5px 20px;
  border-radius: 10px;
  margin: 20px;
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

.calculator-gold-rial {
  padding: 8px 117px;
  border-radius: 10px;
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
    color: green;
  }
  &-geram {
    color: blue;
  }
  &-geram-real {
    color: purple;
  }
}
</style>
