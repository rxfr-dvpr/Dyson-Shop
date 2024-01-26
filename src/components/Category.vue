<template>
  <section class="category__section all-padding">
    <div class="container">
        <div class="row">
            <div class="category-list">
                <div class="category-list-item" v-for="item in store.list" :key="item">
                    <img :src="item.img" alt="" class="item-img">

                    <div class="item-descr">
                        <p class="item-descr-name frstUpper">{{ item.name }}</p>

                        <router-link to="/category" class="item-descr-link frstUpper">
                            Подробнее <i class="fal fa-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { categoryStore } from "@/stores/categoryStore.js";

export default {
    name: 'Category',
    data() {
        return {
            store: categoryStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.category__section {
    width: 100%;

    .category-list {
        max-width: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;

        &-item {
            max-width: 100%;
            width: 100%;
            border-radius: 10px;
            background: #FFF;
            box-shadow: 0px 4px 41px 0px rgba(0, 0, 0, 0.07);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            .item-img {
                max-width: 320px;
                width: 100%;
                max-height: 320px;
                height: 100%;
                object-fit: cover;
                object-position: center center;
                margin: 20px 0 10px;
            }

            .item-descr {
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                padding: 20px 35px 30px;
                transition: .3s;
                cursor: pointer;

                &-name {
                    font-size: calc(13px + 12 * (100vw / 1920));
                    font-weight: 600;
                    transition: .3s;
                }

                &-link {
                    font-size: calc(11px + 11 * (100vw / 1920));
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    transition: .3s;

                    i {
                        font-size: 18px;
                        margin-top: 6px;
                        transition: .3s;
                    }
                }

                &:hover {
                    background: var(--main-black);

                    .item-descr {
                        &-name {
                            color: var(--main-white);
                        }

                        &-link {
                            color: var(--main-white);

                            i {
                                color: var(--main-white);
                            }
                        }
                    }
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    .item-descr {
        &-name {
            font-size: 25px !important;
        }

        &-link {
            font-size: 22px !important;
        }
    }
}

@media (max-width: 1100px) {
    .category-list {
        grid-template-columns: repeat(3, 1fr) !important;
    }
}

@media (max-width: 786px) {
    .category-list {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}

</style>