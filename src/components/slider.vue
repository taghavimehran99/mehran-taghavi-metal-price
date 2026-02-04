<template>
  <div style="width: 180px; height: 90vh;">
    <router-link class="chang-rout" :to="{ name: 'gold' }">Gold</router-link>
    <router-link class="chang-rout" :to="{ name: 'silver' }">silver</router-link>
    <button class="logout" to="login" @click="logOut">log out</button>
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
.logout {
  padding: 5px;
  background: rgb(199, 97, 97);
  border-radius: 10px;
}
</style>
