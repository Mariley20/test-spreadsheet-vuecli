<template>
  <v-app-bar
    :clipped-left="leftDrawer.clipped"
    :clipped-right="rightDrawer.clipped"
    color="primary"
    dark
    app
  >
    <v-app-bar-nav-icon
      v-if="leftDrawer.type !== 'permanent'"
      @click.stop="setLeftDrawerShow({show: !leftDrawer.show})"
    />
    <div class="d-flex align-center">
      El rey
    </div>

    <v-spacer />

    <v-btn
      text
      @click="logout"
    >
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      rightDrawer: (state) => state.defaultLayout.rightDrawer,
      leftDrawer: (state) => state.defaultLayout.leftDrawer
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      setLeftDrawerShow: 'defaultLayout/setLeftDrawerShow'
    }),
    name () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
