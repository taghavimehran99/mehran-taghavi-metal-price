<script setup>
import { onMounted, ref } from 'vue'

const globalGoldPrice = ref(null)
const gramGold24 = ref(null)
const gramGold18 = ref(null)
const gramGoldReal18 = ref(null)
const usde = ref(null)

const number = ref('111.111')

const changeTo = parseInt(number.value)

console.log(number)
console.log(changeTo)

onMounted(
  async () => {
    try {
      const res = await fetch('https://api.gold-api.com/price/XAU')
      const data = await res.json()
      globalGoldPrice.value = data.price

      function cal() {
        const twentyFourGram = globalGoldPrice.value / 31.103
        const tabdil = twentyFourGram / 24
        const eighteenGram = tabdil * 18

        gramGold24.value = twentyFourGram
        gramGold18.value = eighteenGram

        console.log(twentyFourGram)
        console.log(eighteenGram)
      }
      cal()
    } catch (error) {
      console.log('errore', error)
    }
  },

  // for usde

  // async()=>{
  //   try {
  //     const res= await fetch ("https://api.exchangerate.host/latest?base=USD&symbols=IRR");
  //     const data=await res.json();

  //     console.log(data)

  //   } catch (error) {
  //     console.log( 'uuu');
  //   }
  // }
)
</script>

<template>
  <section style="background-color: antiquewhite ; display: flex; we">
    <form>
      <label for="usde">usde: </label>
      <input v-model="usde" type="number" id="usde" placeholder="how much is usde" />
      <br />
      <button @click="Calculate">Calculate</button>
    </form>
    <div>
      <h1 class="one">
        {{ `price of every ounce of gold ${globalGoldPrice} .` }}
      </h1>
      <h1 class="two">{{ `Every Gram of 24-karat Gold${gramGold24}` }}</h1>
      <h1 class="three">{{ `Every Gram of 18-karat Gold${gramGold18}` }}</h1>
      <h1 class="four">{{ `Every Gram of 18-karat Gold to Rial${gramGoldReal18}` }}</h1>
    </div>
  </section>
</template>

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
</style>
