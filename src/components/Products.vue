<template>
  <section class="products__section all-padding">
    <div class="container">
        <div class="row">
            <h2 class="products-titlea all-title">{{ store.title }}</h2>

            <div class="products__list">
                <ProductCard v-for="(card, idx) in store.products" :key="idx" :product="card"/>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { productsStore } from "@/stores/productsStore.js";
import ProductCard from './ProductCard.vue';

export default {
    name: 'Products',
    components: {
        ProductCard
    },
    data() {
        return {
            store: productsStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.products__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 40px;
    }

    .products__list {
        max-width: max-content;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 50px;
        grid-column-gap: 20px;
        justify-content: center;
        margin: 0 auto;
    }
}

@media (max-width: 1400px) {
    .products__list {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

@media (max-width: 992px) {
    .products__list {
        grid-template-columns: repeat(1, 1fr) !important;
    }
}

</style>
