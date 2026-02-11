<template>
  <div class="slider">
    <div>
      <router-link class="slider-btn btn-gold chang-rout" :to="{ name: 'gold' }">Gold</router-link>
      <router-link class="slider-btn btn-silver chang-rout" :to="{ name: 'silver' }"
        >silver</router-link
      >
      <button class="slider-logout" to="login" @click="logOut">log out</button>
    </div>
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

.slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  min-height: 90vh;

  &-logout {
    background: $clo-btn-logout;
    color: $clo-white;
    border-radius: 10px;
    border: solid 1px $clo-gray-border;
    margin: 20px;
    padding: 8px 40px;
    cursor: pointer;
    &:hover {
      background-color: $clo-btn-logout-hover;
    }
  }

  &-btn {
    display: block;
    margin: 20px;
    padding: 8px 40px;
    border-radius: 10px;
    cursor: pointer;
  }
}

.btn-gold {
  background-color: $clo-btn-gold;
  box-shadow: 0 0 10px $clo-gray-border;
  &:hover {
    background-color: $clo-btn-gold-hover;
  }
}
.btn-silver {
  background-color: $clo-btn-silver;
  box-shadow: 0 0 10px $clo-gray-border;
  &:hover {
    background-color: $clo-btn-silver-hover;
  }
}
</style>
