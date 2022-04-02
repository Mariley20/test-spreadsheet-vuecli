<template>
  <v-navigation-drawer
    v-model="showDrawer"
    :width="NAVIGATION_DRAWER_WIDTH"
    :clipped="leftDrawer.clipped"
    :floating="leftDrawer.floating"
    :mini-variant="leftDrawer.mini"
    :permanent="leftDrawer.type === 'permanent'"
    :temporary="leftDrawer.type === 'temporary'"
    app
    overflow
  >
    <v-list
      dense
      nav
    >
      <v-list-item-group
        v-model="group"
        active-class="primary--text text--accent-4"
      >
        <v-list-item :to="{name: 'products'}">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Productos</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{name: 'users'}">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Usuarios</v-list-item-title>
        </v-list-item>
        <v-list-item :to="{name: 'dashboard'}">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dasboard</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Ventas</v-list-item-title>
        </v-list-item> -->
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export const NAVIGATION_DRAWER_WIDTH = 260

export default {
  data () {
    return {
      NAVIGATION_DRAWER_WIDTH,
      drawer: true,
      group: 'test'
    }
  },
  computed: {
    ...mapState({
      leftDrawer: (state) => state.defaultLayout.leftDrawer,
      showLeftDrawer: (state) => state.defaultLayout.leftDrawer.show
    }),

    showDrawer: {
      get () {
        return this.showLeftDrawer
      },
      set (show) {
        this.setLeftDrawerShow({ show })
      }
    }
  },
  methods: {
    ...mapActions({
      setLeftDrawerShow: 'defaultLayout/setLeftDrawerShow'
    })
  }

}
</script>

<style lang="scss" scoped>
</style>
