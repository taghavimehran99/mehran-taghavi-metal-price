<template>
  <section class="page-gold">
    <p class="page-gold-titel">Calculate gold</p>
    <priceGold />
  </section>
</template>

<script setup>
import priceGold from '@/components/gold.vue'
</script>

<style lang="scss" scoped>
.page-gold {
  display: block;
  &-titel {
    display: flex;
    justify-content: center;
    font-size: 24px;
    margin: 20px;
    font-size: x-large;
    font-weight: bold;
  }
}
</style>
