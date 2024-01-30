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

                        <span class="item-amount">
                            <span class="decrement ctrl-btn" @click="item.amount > 1 ? item.amount-- : '' "><i class="fal fa-minus"></i></span>
                            <span class="amount-num">{{ item.amount }}</span>
                            <span class="increment ctrl-btn" @click="item.amount < 99 ? item.amount++ : '' "><i class="fal fa-plus"></i></span>
                        </span>

                        <p class="item-descr-price">
                            <span class="new-price">{{ itemPerPrice(item.price.new, item.amount) }} ₽</span>
                            <span class="discount-price">Скидка {{ item.status.discount }}%</span>
                        </p>
                    </div>

                    <button class="delete-btn" @click="delProduct(item.id)"><i class="far fa-trash-alt"></i></button>
                </div>
            </div>

            <span class="no-product-txt frstUpper" v-else>{{ store.noProductTxt }}...</span>
            
            <span class="cart__total-price" v-if="store.cartList.length">
                Итоговая стоимость без доставки: <span class="num">{{ splitPrice(totalPrice) }}</span> руб.
            </span>

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
        },
        splitPrice(price) {
            price = price.toString().split('');

            if (price.length == 6) {
                price.splice(3, 0, ' ')
            } else if (price.length == 5) {
                price.splice(2, 0, ' ')
            } else if (price.length == 7) {
                price.splice(1, 0, ' ')
                price.splice(5, 0, ' ')
            } else if (price.length == 8) {
                price.splice(2, 0, ' ')
                price.splice(6, 0, ' ')
            } else if (price.length == 9) {
                price.splice(3, 0, ' ')
                price.splice(7, 0, ' ')
            } else {
                price == price
            }

            let editedPrice = price.join('')
            return editedPrice
        },
        itemPerPrice(price, amount) {
            return this.splitPrice(price * amount)
        }
    },
    computed: {
        totalPrice() {
            let price = 0
            this.store.cartList.map(item => price += item.price.new * item.amount)
            return price
        }
    }
}

</script>

<style lang="scss" scoped>

.cart__section {
    width: 100%;
    padding: 70px 0 150px;

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
        max-width: 850px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;

        &-item {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px 20px 10px 10px;
            gap: 15px;
            border-radius: 15px;
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);

            .item-img {
                max-width: 80px;
                width: 100%;
                height: max-content;
            }

            .item-descr {
                max-width: 650px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;

                &-name {
                    max-width: 250px;
                    width: 100%;
                    font-size: 18px;
                    font-weight: 600;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .item-amount {
                    max-width: max-content;
                    width: 100%;
                    padding: 5px;
                    border-radius: 3px;
                    display: flex;
                    gap: 6px;
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

                &-price {
                    max-width: 150px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    font-size: calc(18px + 4 * (100vw / 1920));
                    color: #8B8B8B;

                    .new-price {
                        font-weight: 600;
                    }
                    
                    .old-price {
                        font-size: calc(14px + 4 * (100vw / 1920));
                        font-weight: 600;
                        margin-left: auto;
                        text-decoration: line-through;
                        color: #8B8B8B;
                    }

                    .discount-price {
                        width: 100%;
                        display: block;
                        font-size: 15px;
                        font-weight: 500;
                        color: var(--main-pink);
                    }
                }
            }

            .delete-btn {
                margin: auto 0 auto auto;
                background: transparent;
                border: 0;
                font-size: 22px;
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

    .cart__total-price {
        font-size: calc(18px + 10 * (100vw / 1920));
        color: #8B8B8B;
        font-weight: 600;
    }
}

@media (min-width: 1920px) {
    .cart__total-price {
        font-size: 28px !important;
    }

    .item-descr-price {
        font-size: 22px !important;

        .old-price {
            font-size: 18px !important;
        }
    }
}

</style>