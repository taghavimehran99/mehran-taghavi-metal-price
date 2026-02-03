export function guard(to, from, next) {
  const isLogin = !!localStorage.getItem('isLogin')
  if (to.meta.login && !isLogin) {
    console.log('need to  login')
    next({ name: 'login' })
  } else {
    next()
  }
}
