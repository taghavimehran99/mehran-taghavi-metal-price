<template>
  <header class="header">
    <p>this is page show and Calculate metals price</p>
  </header>

  <section class="contant">
    <slider class="contant-slider" />
    <mobilSlider class="contant-mobil-slider" />
    <main class="contant-main">
      <router-view class="contant-main-rout" />
    </main>
  </section>

  <footer class="footer">
    <p class="footer-descrption">the writer this web sit is Mehran Taghavi .</p>
    <span>taghavimehran99@gmail.com </span>
  </footer>
</template>

<script setup>
import slider from '@/components/slider.vue'
import mobilSlider from '@/components/mobilSlider.vue'
</script>

<style lang="scss" scoped>

.contant {
  display: grid;
  grid-template-columns: 300px 5fr;
  width: 100%;
  max-width: 1700px;
  min-height: 100vh;
  gap: 20px;

  &-slider {
    background: $clo-gray-backgrand-main-layout;
    align-self: center;
    justify-self: end;
    border-radius: 12px;
  }

  &-mobil-slider {
    display: none;
  }

  &-main {
    padding: 20px;
    background: $clo-gray-backgrand-main-layout;
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

@media (min-width: 0px) and (max-width: 768px) {
  .contant {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px;

    &-slider {
      display: none;
    }

    &-mobil-slider {
      display: flex;
    }

    &-main {
      width: 100%;
      padding: $-size-10;
      margin-bottom: $-size-20;
    }
  }

  .footer-descrption {
    display: none;
  }
}
</style>
