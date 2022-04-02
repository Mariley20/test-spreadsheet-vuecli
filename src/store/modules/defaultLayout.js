import {
  SET_DEFAULT_LAYOUT_LEFT_DRAWER_SHOW,
  SET_DEFAULT_LAYOUT_RIGHT_DRAWER_SHOW
} from '@/store/mutationTypes.js'

const state = () => ({
  leftDrawer: {
    show: null,
    type: 'default',
    clipped: true,
    floating: false,
    mini: false
  },
  rightDrawer: {
    show: false,
    type: 'temporary',
    clipped: false,
    floating: true,
    mini: false
  },
  footer: {
    inset: false
  }
})

const getters = {}

const actions = {
  setLeftDrawerShow ({ commit }, { show }) {
    commit('SET_DEFAULT_LAYOUT_LEFT_DRAWER_SHOW', { show })
  },
  setRightDrawerShow ({ commit }, { show }) {
    commit('SET_DEFAULT_LAYOUT_RIGHT_DRAWER_SHOW', { show })
  }
}

const mutations = {
  [SET_DEFAULT_LAYOUT_LEFT_DRAWER_SHOW] (state, { show }) {
    state.leftDrawer.show = show
  },
  [SET_DEFAULT_LAYOUT_RIGHT_DRAWER_SHOW] (state, { show }) {
    state.rightDrawer.show = show
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
