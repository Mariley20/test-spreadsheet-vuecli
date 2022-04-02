import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth.js'
import defaultLayout from '@/store/modules/defaultLayout.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth, defaultLayout
  }
})

export default store
