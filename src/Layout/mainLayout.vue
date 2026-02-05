<template>
  <header class="header">
    <p>this is page show and Calculate metals price</p>
  </header>

  <section class="contant">
    <slider class="contant-slider" />
    <main class="contant-main">
      <router-view class="contant-main-rout" />
    </main>
  </section>

  <footer class="footer">
    <p>the writer this web sit is Mehran Taghavi .</p>
    <span>taghavimehran99@gmail.com </span>
  </footer>
</template>

<script setup>
import slider from '@/components/slider.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/varebels.scss';

.contant {
  display: grid;
  grid-template-columns: 2fr 5fr;
  width: 100%;
  max-width: 1700px;
  min-height: 100vh;
  gap: 20px;

  &-slider {
    background: rgb(212, 212, 212);
    align-self: center;
    justify-self: end;
    border-radius: 12px;
  }

  &-main {
    background: rgb(212, 212, 212);
    border-radius: 12px;
    height: 90vh;
    width: 80%;
    max-width: 1200px;
    align-self: center;
    justify-self: start;
  }
}

.header {
  display: flex;
  justify-content: space-around;
  background: $clo-primery;
  padding: 20px;
  color: $clo-white;
  font-size: 20px;
  font-weight: bold;
}

.footer {
  display: flex;
  justify-content: space-around;
  background: $clo-primery;
  padding: 20px;
  color: $clo-white;
  font-size: 20px;
  font-weight: bold;
}
</style>
