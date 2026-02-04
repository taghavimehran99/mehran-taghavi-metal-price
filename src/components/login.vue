<template>
  <section class="login" v-if="isligon">
    <form class="login-form">
      <label class="login-form-name" for="userName">User Name</label>
      <input v-model="name" class="login-form-info" type="text" id="userName" placeholder="name" />

      <label class="login-form-password" for="password">password</label>
      <input
        v-model="password"
        class="login-form-info"
        type="password"
        id="password"
        placeholder="password"
      />
      <span v-if="blanckInputValue" class="" style="color: red"
        >Please entry user name password</span
      >
      <button @click.prevent="login" class="login-form-btn">login</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const password = ref('')
const isligon = ref(true)
const blanckInputValue = ref(false)
const router = useRouter()

function login() {
  if (name.value !== '' && password.value !== '') {
    localStorage.setItem('isLogin', '234567ghjk')
    router.push({ name: 'gold' })
    blanckInputValue.value = false
  } else {
    blanckInputValue.value = true
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/varebels.scss';

.login {
  &-form {
    display: block;
    height: 400px;
    width: 250px;

    &-name {
      width: 250px;
      height: 30px;
      padding: 3px;
      border-radius: 10px;
      border: 0px;
    }

    &-password {
      width: 250px;
      height: 30px;
      padding: 3px;
      border-radius: 10px;
    }

    &-info {
      width: 250px;
      height: 30px;
      padding: 3px;
      border-radius: 10px;
      padding: 10px;
      border: solid 1px $clo-gray-border;
    }

    &-btn {
      width: 250px;
      height: 30px;
      padding: 3px;
      border-radius: 10px;
      border: solid 1px $clo-gray-border;
      color: white;
      background-color: $clo-primery;
      margin-top: 15px;
    }
  }
}
</style>
