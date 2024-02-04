<template>
  <Header/>

  <main class="main">
    <Category/>

    <Opinion/>

    <Advantages/>

    <Equipment/>

    <Reviews/>
    
    <Faq/>

    <Ordering/>

    <Contact/>
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Opinion from '@/components/Opinion.vue'
import Advantages from '@/components/Advantages.vue'
import Category from '@/components/Category.vue'
import Contact from '@/components/Contact.vue'
import Ordering from '@/components/Ordering.vue'
import Equipment from '@/components/Equipment.vue'
import Faq from '@/components/Faq.vue'
import Reviews from '@/components/Reviews.vue'

export default {
  name: 'Home Page',
  components: {
    Header,
    Category,
    Opinion,
    Advantages,
    Equipment,
    Reviews,
    Faq,
    Ordering,
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