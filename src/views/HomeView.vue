<template>
  <Header/>

  <main class="main">
    <Opinion/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Opinion from '@/components/Opinion.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Opinion
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

</style>