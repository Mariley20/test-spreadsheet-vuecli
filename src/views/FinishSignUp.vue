<template>
  <div>
    finishSignUp page
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro delectus facilis facere! Similique quis est iusto ad velit ut corrupti perspiciatis nemo ea? Corporis error molestias accusantium rem, minus voluptate.
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  created () {
    this.verifyEmail()
  },
  methods: {
    verifyEmail () {
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        console.log('valid', firebase.auth().isSignInWithEmailLink(window.location.href))
        console.log(this.$route)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
