<template>
  <section class="page-silver">
    <p class="page-silver-titel">Calculate silver</p>
    <priceSilver />
  </section>
</template>

<script setup>
import priceSilver from '@/components/silver.vue'
</script>

<style lang="scss" scoped>
.page-silver {
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
