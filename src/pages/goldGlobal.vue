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
@import '@/assets/varebels.scss';

.page-gold {
  display: block;
  &-titel {
    display: flex;
    justify-content: center;
    font-size: $-size-24;
    margin: $-size-20;
    font-size: x-large;
    font-weight: bold;
  }
}
</style>
