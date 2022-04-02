<template>
  <div>
    <AppBar />
    <NavigationDrawerLeft />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>

<script>
import NavigationDrawerLeft from '@/components/NavigationDrawer/NavigationDrawerLeft.vue'
import AppBar from '@/components/AppBar/AppBar.vue'

export default {
  components: {
    AppBar,
    NavigationDrawerLeft
  }
}
</script>

<style lang="scss" scoped>

</style>
