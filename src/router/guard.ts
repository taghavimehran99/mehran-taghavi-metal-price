export function guard(to:string|any, from :string, next:string|any) {
  const isLogin = !!localStorage.getItem('isLogin')
  if (to.meta.login && !isLogin) {
    console.log('need to  login')
    next({ name: 'login' })
  } else {
    next()
  }
}
