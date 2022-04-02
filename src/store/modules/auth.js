import { SET_USER, SET_TOKEN } from '@/store/mutationTypes'
import firebase from 'firebase/app'
import 'firebase/auth'

const state = () => ({
  user: null,
  token: null
})

const getters = {
  userUid: (state) => {
    return state.user?.uid || null
  },
  isAuthenticated: (state) => {
    return !!state.user || false
  }
}

const actions = {
  async registerAuthGoogleProvider ({ commit }, payload) {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential

        var token = credential.accessToken
        var user = result.user
        commit(SET_USER, { user })
        commit(SET_TOKEN, { token })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  fetchUser ({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit(SET_USER, { user })
        }
        resolve(user)
      }, reject)
    })
  },
  async logout ({ commit }, payload) {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
      console.log(error)
    })
  },
  async sendSignInLinkToEmail ({ commit }, { email, actionCodeSettings }) {
    console.log(email, actionCodeSettings)
    firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
      .then((response) => {
        console.log(response)
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', email)
        // ...
      })
      .catch((error) => {
        console.log(error)
        // var errorCode = error.code
        // var errorMessage = error.message
        // ...
      })
  }
}

const mutations = {
  [SET_USER] (state, { user }) {
    state.user = user
  },
  [SET_TOKEN] (state, { token }) {
    state.token = token
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
