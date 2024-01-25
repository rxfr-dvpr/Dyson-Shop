<template>
  <Header/>

  <main class="main">
    <Category/>

    <Opinion/>

    <Advantages/>

    <Contact/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Opinion from '@/components/Opinion.vue'
import Advantages from '@/components/Advantages.vue'
import Category from '@/components/Category.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Category,
    Opinion,
    Advantages,
    Contact
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