<template>
  <section>
    <h1>{{ silver }}</h1>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { api } from '/src/axios/api.js'

const silver = ref('')

async function getSilver() {
  try {
    const requstsilver = await api.get('XAG')
    const dataSilver = await requstsilver.data

    silver.value = dataSilver.price

    console.log(dataSilver)
  } catch (error) {
    console.log(error, `this is error for api  silver `)
  }
}

onMounted(() => {
  getSilver()
})
</script>

<style></style>
