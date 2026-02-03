<template>
  <section>
    <h1>{{ silver }}</h1>
  </section>
</template>

<script setup>
import { onMounted  , ref} from 'vue'
import axios from 'axios'


const silver =ref('')

async function getSilver() {
  try {
    const requstsilver = await axios.get('https://api.gold-api.com/price/XAG')
    const dataSilver = await requstsilver.data

    silver.value=dataSilver.price

    console.log(dataSilver)
  } catch (error) {
    console.log(error, `this is error for api  silver `)
  }
}

onMounted(()=>{
    getSilver()
})
</script>

<style></style>
