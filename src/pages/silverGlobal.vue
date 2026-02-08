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

@import '@/assets/varebels.scss';

.page-silver {
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
