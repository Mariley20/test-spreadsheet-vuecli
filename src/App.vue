<template>
  <v-app>
    <component :is="this.$route.meta.layout || 'div'">
      <transition
        name="fade-router-view"
        mode="out-in"
      >
        <router-view />
      </transition>
    </component>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    //
  })
}
</script>
