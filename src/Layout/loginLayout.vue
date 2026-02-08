<template>
  <header class="header">
    <p>this is page login for web sit Calculate metals price</p>
    <span>icone</span>
  </header>

  <section class="login-layout">
    <main class="login-layout-main">
      <router-view />
    </main>
  </section>

  <footer class="footer">
    <p>the writer this web sit is Mehran Taghavi .</p>
    <span>taghavimehran99@gmail.com </span>
  </footer>
</template>

<style scoped lang="scss">
@import '@/assets/varebels.scss';

.login-layout {
  background: $clo-gray-backgrand-login;
  display: grid;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  place-items: center;
  margin: auto;
}
.header {
  display: flex;
  justify-content: space-around;
  background: $clo-primery;
  padding: $-size-20;
  color: $clo-white;
  font-size: $-size-20;
  font-weight: bold;
}
.footer {
  display: flex;
  justify-content: space-around;
  background: $clo-primery;
  padding: $-size-20;
  color: $clo-white;
  font-size: $-size-20;
  font-weight: bold;
}
</style>
