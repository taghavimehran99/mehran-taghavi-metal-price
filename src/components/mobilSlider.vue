<template>
  <div class="mobil-slider">
    <router-link class="slider-btn btn-gold chang-rout" :to="{ name: 'gold' }">Gold</router-link>
    <router-link class="slider-btn btn-silver chang-rout" :to="{ name: 'silver' }"
      >silver</router-link
    >
    <button class="slider-logout" to="login" @click="logOut">log out</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function logOut() {
  localStorage.removeItem('isLogin')
  router.push({ name: 'login' })
}
</script>

<style scoped lang="scss">
@import '@/assets/varebels.scss';

.mobil {
  &-slider {
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 10px;
  }
}

.slider {
  &-logout {
    background: rgb(199, 97, 97);
    color: $clo-white;
    border-radius: 10px;
    border: solid 1px $clo-gray-border;
    margin: 10px;
    padding: 4px 20px;
    cursor: pointer;
    &:hover {
      background-color: rgb(200, 1, 1);
    }
  }

  &-btn {
    margin: 10px;
    padding: 20px 20px;
    background: rgb(150, 150, 150);
    border-radius: 10px;
    cursor: pointer;
  }
}

.btn-gold {
  background-color: gold;
  box-shadow: 0 0 10px $clo-gray-border;
  &:hover {
    background-color: goldenrod;
  }
}

.btn-silver {
  background-color: silver;
  box-shadow: 0 0 10px $clo-gray-border;
  &:hover {
    background-color: rgb(91, 91, 91);
  }
}
</style>
