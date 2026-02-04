import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router"

export function guard(to:RouteLocationNormalized, from:RouteLocationNormalized , next:NavigationGuardNext) {
  const isLogin = !!localStorage.getItem('isLogin')
  if (to.meta.login && !isLogin) {
    console.log('need to  login')
    next({ name: 'login' })
  } else {
    next()
  }
}
