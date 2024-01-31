<template>
    <Popover :txt="store.popUpText" :opened="openedAlert"/>
    <section class="products__section all-padding">
      <div class="container">
          <div class="row">
              <h2 class="products-titlea all-title">{{ store.title }}</h2>

              <div class="tags__list">
                  <span class="tags__list-item all-txt" v-for="(tag, idx) in store.tags" 
                  :key="idx" :class="{'active': tag.active}" @click="selectTag(idx)">{{ tag.name }}</span>
              </div>

              <div class="products__list">
                  <ProductCard v-for="(card, idx) in store.products" :key="idx" :product="card" @openAlert="openAlert"/>
              </div>
          </div>
      </div>
    </section>
</template>

<script>
import { productsStore } from "@/stores/productsStore.js";
import ProductCard from './ProductCard.vue';
import Popover from './Popover.vue';

export default {
    name: 'Products',
    components: {
        ProductCard,
        Popover
    },
    data() {
        return {
            store: productsStore(),
            openedAlert: false
        }
    },
    methods: {
        selectTag(idx) {
            this.store.tags.map(tag => tag.active = false)
            this.store.tags[idx].active = true
        },
        openAlert() {
            this.openedAlert = true
            
            setTimeout(() => {
                this.openedAlert = false
            }, 2000);
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

    .tags__list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        &-item {
            padding: 5px 20px;
            border: solid 1px var(--main-black);
            border-radius: 30px;
            cursor: pointer;
            transition: .3s;
            font-weight: 400;

            &:hover, &.active {
                background: var(--main-pink);
                color: var(--main-white);
                border-color: transparent;
            }
        }
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
