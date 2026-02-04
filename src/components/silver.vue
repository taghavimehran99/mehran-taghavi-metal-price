<template>
  <section>
    <h1 v-if="isloding">loding</h1>
    <h1 v-else>{{ silver }}</h1>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { api } from '/src/axios/api.js'

const silver = ref('')
const isloding = ref(true)

async function getSilver() {
  try {
    const requstsilver = await api.get('XAG')
    const dataSilver = await requstsilver.data

    silver.value = dataSilver.price
    isloding.value=false

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
