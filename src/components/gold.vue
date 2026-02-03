<template>
  <section v-if="isLoginValid" style="background-color: antiquewhite; display: flex">
    <form>
      <label style="color: black" for="usde">usde: </label>
      <input v-model="usde" type="number" id="usde" placeholder="how much is usde" />
      <br />
      <button @click.prevent="calGoldRial">Calculate</button>
    </form>
    <div>
      <h1 class="one">
        {{ `ounce of global gold ${globalGoldPrice} $.` }}
      </h1>
      <h1 class="two">{{ `Gram 24-karat Gold ${gramGold24} $` }}</h1>
      <h1 class="three">{{ `Gram 18-karat Gold ${gramGold18} $` }}</h1>
      <h1 class="four">{{ `Gram 18-karat Gold  ${gramGoldReal18} ريال` }}</h1>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

const globalGoldPrice = ref(null)
const gramGold24 = ref(null)
const gramGold18 = ref(null)
const gramGoldReal18 = ref('')

const isLoginValid = ref(true)
const usde = ref(null)

const calGoldRial = computed(() => {
  const one = gramGold18.value * usde.value
  gramGoldReal18.value = one
})

onMounted(
  async () => {
    try {
      const res = await axios.get('https://api.gold-api.com/price/XAU')
      const data = await res.data

      globalGoldPrice.value = Math.round(data.price)

      function cal() {
        const twentyFourGram = Math.round(globalGoldPrice.value / 31.103)
        const eighteenGram = Math.round((globalGoldPrice.value / 31.103 / 24) * 18)

        gramGold24.value = twentyFourGram
        gramGold18.value = eighteenGram
      }
      cal()
    } catch (error) {
      console.log('errore', error)
    }
  },

  // async ()=>{
  //   try {
  //     const res =await axios.get('https://api.gold-api.com/price/XAU')
  //     const slm =res.data
  //     console.log(slm);

  //   } catch (error) {

  //   }
  // }
)
</script>

<style scoped>
.one {
  color: red;
}
.two {
  color: rgb(17, 0, 255);
}
.three {
  color: rgb(0, 255, 26);
}

.four {
  color: rgb(0, 0, 0);
}
</style>
