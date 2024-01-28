<template>
  <section class="cart__section">
    <div class="container">
        <div class="row">
            <h2 class="cart-title all-title">{{ store.title }} ({{ store.cartList.length }})</h2>

            <span class="line-border" v-if="!store.cartList.length"></span>

            <div class="cart__list" v-if="store.cartList.length">
                <div class="cart__list-item" v-for="(item, idx) in store.cartList" :key="idx">
                    <img :src="item.img" alt="" class="item-img">

                    <div class="item-descr">
                        <p class="item-descr-name">{{ item.name }}</p>

                        <div class="item-descr-bottom">
                            <span class="item-amount">
                                <span class="decrement ctrl-btn" @click="item.amount > 1 ? item.amount-- : '' "><i class="fal fa-minus"></i></span>
                                <span class="amount-num">{{ item.amount }}</span>
                                <span class="increment ctrl-btn" @click="item.amount < 99 ? item.amount++ : '' "><i class="fal fa-plus"></i></span>
                            </span>

                            <p class="item-descr-price">
                                <span class="new-price">{{ item.price.new }}</span>
                                <span class="old-price">{{ item.price.old }}</span>
                            </p>
                        </div>
                    </div>

                    <button class="delete-btn" @click="delProduct(item.id)"><i class="fal fa-times"></i></button>
                </div>
            </div>

            <span class="no-product-txt frstUpper" v-else>{{ store.noProductTxt }}...</span>
        </div>
    </div>
  </section>
</template>

<script>
import { cartStore } from "@/stores/cartStore.js";

export default {
    name: 'Cart Section',
    data() {
        return {
            store: cartStore()
        }
    },
    methods: {
        delProduct(id) {
            this.store.cartList = this.store.cartList.filter(item => item.id !== id)
        }
    }
}

</script>

<style lang="scss" scoped>

.cart__section {
    width: 100%;
    padding: 70px 0 150px;
    min-height: 40vh;

    .row {
        flex-direction: column;
        row-gap: 45px;
    }

    .no-product-txt {
        font-weight: 700;
        font-size: 25px;
    }

    .line-border {
        width: 100%;
        height: 1px;
        background: rgba($color: #000000, $alpha: .2);
    }

    .cart__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 35px;
        margin-top: 30px;

        &-item {
            width: 100%;
            display: flex;
            border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
            padding-bottom: 35px;
            gap: 50px;

            .item-img {
                max-width: 150px;
                width: 100%;
            }

            .item-descr {
                max-width: 895px;
                width: 100%;
                min-height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                row-gap: 25px;

                &-name {
                    font-size: 25px;
                    font-weight: 600;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                &-bottom {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    gap: 25px;
                    align-items: center;

                    .item-amount {
                        max-width: 120px;
                        width: 100%;
                        padding: 5px;
                        border-radius: 3px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        font-size: 20px;
                        background: #E9E9E9;

                        .amount-num {
                            width: 25px;
                            text-align: center;
                        }

                        .ctrl-btn {
                            width: 25px;
                            cursor: pointer;
                            background: var(--main-white);
                            text-align: center;
                        }
                    }
                }
            }

            .delete-btn {
                margin: auto 0 auto auto;
                background: transparent;
                border: 0;
                font-size: 25px;
                height: max-content;

                i {
                    color: #6F6F6F;
                    transition: .3s;
                }

                &:hover {
                    i {
                        color: var(--main-pink);
                    }
                }
            }
        }
    }
}

</style>