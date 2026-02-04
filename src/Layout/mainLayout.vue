<template>
  <header class="contant-main-header">price page</header>

  <section class="contant">
    <slider class="contant-slider" />
    <main class="contant-main">
      <router-view class="contant-main-rout" />
    </main>
  </section>

  <footer class="contant-main-footer">footer</footer>
</template>

<script setup>
import slider from '@/components/slider.vue'
</script>

<style lang="scss" scoped>
.contant {
  display: grid;
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 1fr;
  width: 50vw;
  height: 100vh;
  margin: auto;
  gap: 10px;
  place-items: center;

  &-slider {
    background: red;
    background: rgb(212, 212, 212);
  }

  &-main {
    background: rgb(212, 212, 212);
    border-radius: 12px;
    height: 90vh;
    width: 50vw;

    &-rout {
      display: flex;
      height: 85vh;
    }

    &-header {
      background: red;
    }

    &-footer {
      background: red;
    }
  }
}
</style>
