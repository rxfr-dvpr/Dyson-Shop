<template>
  <div class="product-card">
    <img :src="product.img" alt="" class="product-card-img">

    <div class="card-descr">
        <p class="card-descr-name frstUpper">{{ product.name }}</p>

        <span class="card-descr-status">
            <span class="available-status all-txt" :class="`${product.status.available ? 'green' : 'red'}`">
                <span class="status-dot"></span>
                {{ product.status.available ? 'В наличии' : 'Нет в наличии' }}
            </span>

            <span class="discount-status all-btn" v-if="product.status.discount">-{{ product.status.discount }}%</span>
        </span>

        <span class="card-descr-price">
            <p class="new-price all-title">{{ splitPrice(product.price.new) }} ₽</p>
            <p class="old-price">{{ splitPrice(product.price.old) }} ₽</p>
        </span>
    </div>

    <div class="product-card-adding">
        <span class="product-card-amount" :disabled="!product.status.available">
            <span class="decrement ctrl-btn" @click="amount > 1 ? amount-- : '' "><i class="fal fa-minus"></i></span>
            <span class="amount-num">{{ amount }}</span>
            <span class="increment ctrl-btn" @click="amount < 99 ? amount++ : '' "><i class="fal fa-plus"></i></span>
        </span>

        <button class="product-card-btn all-btn dark" :disabled="!product.status.available">В корзину</button>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Product Card',
    props: {
        product: {
            type: Object,
            required: true,
            default: {
                img: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
                name: 'no name',
                status: {
                    available: true,
                    discount: 1
                },
                price: {
                    new: 0,
                    old: 0
                }
            }
        }
    },
    data() {
        return {
            amount: 1
        }
    },
    methods: {
        splitPrice(price) {
            price = price.toString().split('');
            const insertIndices = [3, 2, 1, 2, 3];
            const length = price.length;

            if (length >= 5 && length <= 9) {
                price.splice(insertIndices[length - 4], 0, ' ');
                if (length >= 7) {
                    price.splice(5, 0, ' ');
                }
            }

            return price.join('');
        }
    }
}

</script>

<style lang="scss" scoped>

@mixin between {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@mixin flexColumn {
    display: flex;
    flex-direction: column;
}

.product-card {
    max-width: 440px;
    width: 100%;
    height: auto;
    border-radius: 3px;
    background: #FFF;
    box-shadow: 0px 4px 41px 0px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    @include flexColumn;
    row-gap: 40px;

    &-img {
        width: 100%;
        min-height: 440px;
        max-height: 440px;
        height: 100%;
        object-fit: cover;
        object-position: top center;
    }

    .card-descr {
        max-width: 360px;
        width: 100%;
        margin: 0 auto;
        height: 100%;
        @include flexColumn;
        row-gap: 20px;
        padding: 0 12px;

        &-name {
            font-size: calc(10px + 14 * (100vw / 1920));
            font-weight: 300;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        &-status {
            width: 100%;
            @include between;
            margin-top: auto;

            .available-status {
                display: flex;
                align-items: center;
                gap: 10px;
                font-weight: 500;

                .status-dot {
                    width: 13px;
                    height: 13px;
                    border-radius: 50%;
                }

                &.green {
                    color: var(--main-green);

                    .status-dot {
                        background: var(--main-green) !important;
                    }
                }

                &.red {
                    color: var(--main-red);

                    .status-dot {
                        background: var(--main-red) !important;
                    }
                }
            }

            .discount-status {
                cursor: initial !important;

                &:hover {
                    background: var(--main-pink) !important;
                }
            }
        }

        &-price {
            @include between;

            .old-price {
                font-size: calc(12px + 12 * (100vw / 1920));
                color: #ABABAB;
                text-decoration: line-through;
            }
        }
    }

    &-adding {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    &-amount {
        width: 100%;
        padding: 10px;
        border: 1px solid var(--main-black);
        border-radius: 3px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 24px;
        
        .amount-num {
            width: 25px;
            text-align: center;
        }

        .ctrl-btn {
            cursor: pointer;
        }
    }

    &-btn {
        max-width: 100% !important;

        &:hover {
            background: var(--main-pink);
        }
    }
}

@media (min-width: 1920px) {
    .card-descr-name, .old-price {
        font-size: 24px !important;
    }
}


</style>