<template>
  <Nav v-cloak/>
  
  <router-view v-cloak/>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}

</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>