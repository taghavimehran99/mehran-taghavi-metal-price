<template>
  <section class="login-layout">
    <header class="login-layout-header">login page</header>
    <main class="login-layout-main">
      <router-view />
    </main>
    <footer class="login-layout-footer">footer</footer>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
.login-layout {
  background: rgb(209, 209, 209);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  width: 90vw;
  height: 100vh;
  place-items: center;
  margin: auto;

  &-main {
    background: red;
  }

  &-header {
    background: red;
  }
  &-footer {
    background: red;
  }
}
</style>
