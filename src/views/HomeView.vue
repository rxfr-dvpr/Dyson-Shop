<template>
  <Header/>

  <main class="main">
    <Category/>

    <Opinion/>

    <Advantages/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Opinion from '@/components/Opinion.vue'
import Advantages from '@/components/Advantages.vue'
import Category from '@/components/Category.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Category,
    Opinion,
    Advantages,
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