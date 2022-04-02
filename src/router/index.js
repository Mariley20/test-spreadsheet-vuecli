import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '@/store/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const publicPageNames = ['login', 'register', 'finish_sign_up']
  // store.dispatch('cancelAllPendingAxiosRequests/cancelPendingRequest')
  console.log(to.name)
  const toIsPublicPage = publicPageNames.includes(to.name)
  const user = store.state.auth.user

  if (!user) {
    try {
      await store.dispatch('auth/fetchUser')
    } catch (error) {
      // console.error('Error fetchUser', error.response)
    }
  }

  const isAuthenticated = !!store.state.auth.user
  console.log(isAuthenticated)
  // const userIsClient = store.getters['auth/userIsClient']

  if (toIsPublicPage && !isAuthenticated) {
    next()
    return
  }

  if (toIsPublicPage && isAuthenticated) {
    next({ name: 'dashboard' })
    return
  }

  if (isAuthenticated) {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
