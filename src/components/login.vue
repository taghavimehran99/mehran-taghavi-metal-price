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
      <span v-if="tosat" class="" style="color: red">Please login</span>
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
const tosat = ref(false)
const router = useRouter()

function login() {
  if (name.value !== '' && password.value !== '') {
    localStorage.setItem('isLogin', '234567ghjk')
    router.push({ name: 'gold' })
    tosat.value = false
  } else {
    tosat.value = true
  }
}
</script>

<style scoped lang="scss">
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
      border: 0px;
    }

    &-info {
      width: 250px;
      height: 30px;
      padding: 3px;
      border-radius: 10px;
      border: solid 2px gray;
      padding: 10px;
    }

    &-btn {
      width: 250px;
      height: 30px;
      padding: 3px;
      border-radius: 10px;
      border: 0px;
      color: white;
      background-color: green;
      margin-top: 15px;
    }
  }
}
</style>
