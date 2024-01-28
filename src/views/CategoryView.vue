<template>
  <main class="main">
    <Products/>

    <Opinion/>

    <Advantages/>

    <Faq/>

    <Reviews/>  
    
    <Contact/>
  </main>
</template>

<script>
import Products from '@/components/Products.vue'
import Contact from '@/components/Contact.vue'
import Reviews from '@/components/Reviews.vue'
import Faq from '@/components/Faq.vue'
import Opinion from '@/components/Opinion.vue'
import Advantages from '@/components/Advantages.vue'

export default {
  name: "Category Page",
  components: {
    Products,
    Opinion,
    Advantages,
    Reviews,
    Faq,
    Contact
  }
}

</script>

<style lang="scss" scoped></style>
