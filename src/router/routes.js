import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PublicLayout from '@/layouts/PublicLayout.vue'

export default [
  {
    path: '/',
    name: 'welcome',
    redirect: {
      name: 'login'
    },
    meta: {
      layout: PublicLayout,
      isPublic: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
    meta: {
      layout: PublicLayout,
      isPublic: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/RegisterPage.vue'),
    meta: {
      layout: PublicLayout,
      isPublic: true
    }
  },
  {
    path: '/finish_sign_up',
    name: 'finish_sign_up',
    component: () => import('@/views/FinishSignUp.vue'),
    meta: {
      layout: PublicLayout,
      isPublic: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/DashboardPage.vue'),
    meta: {
      layout: DefaultLayout,
      isPublic: false
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsPage.vue'),
    meta: {
      layout: DefaultLayout,
      isPublic: false
    }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/UsersPage.vue'),
    meta: {
      layout: DefaultLayout,
      isPublic: false
    }
  }
]
