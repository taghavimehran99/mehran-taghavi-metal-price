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
      <p class="price-ounce">{{ `ounce of global gold ${globalGoldPrice} $` }}</p>
      <p class="price-geram">{{ `Gram 24-karat Gold ${gramGold24} $` }}</p>
      <p class="price-geram">{{ `Gram 18-karat Gold ${gramGold18} $` }}</p>
      <p class="price-geram-real">
        <span v-if="showRial">{{ `Gram 18-karat Gold ${gramGoldReal18}` }}ريال</span>
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { api } from '@/axios/api'

const globalGoldPrice = ref<number>(0)
const gramGold24 = ref<number>(0)
const gramGold18 = ref<number>(0)
const gramGoldReal18 = ref<string>('')
const Usdet = ref<number | null>(null)

const isLoginValid = ref<boolean>(true)
const showRial = ref<boolean>(false)

function calculatorGoldRial() {
  if (Usdet.value !== null) {
    const calculatorgram18 = gramGold18.value * Usdet.value
    gramGoldReal18.value = calculatorgram18.toLocaleString()
    showRial.value = true
  }
}

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
.gold {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: $-size-20;
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
  padding: $-size-5 $-size-20;
  border-radius: $-size-10;
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
  &-ounce {
    color: $clo-ounce;
    font-size: $-size-30;
  }
  &-geram {
    color: $clo-gram-usde;
    font-size: $-size-30;
  }
  &-geram-real {
    color: $clo-gram-rial;
    font-size: $-size-30;
  }
}
</style>
