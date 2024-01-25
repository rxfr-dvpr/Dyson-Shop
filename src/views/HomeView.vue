<template>
  <Header/>

  <main class="main">
    <Opinion/>

    <Advantages/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Opinion from '@/components/Opinion.vue'
import Advantages from '@/components/Advantages.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Opinion,
    Advantages
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