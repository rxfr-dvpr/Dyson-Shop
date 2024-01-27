<template>
  <Nav v-cloak/>
  
  <router-view v-cloak/>

  <Footer v-cloak/>
</template>

<script>
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}

</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>