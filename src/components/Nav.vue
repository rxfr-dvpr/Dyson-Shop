<template>
    <nav class="nav">
        <div class="container">
            <div class="row">

                <button class="nav-mb-btn" v-if="screenSize <= 992" @click="navOpened = !navOpened">
                    <i class="fal fa-bars"></i>
                </button>

                <router-link to="/" class="nav-logo">
                    <img :src="store.logoUrl" alt="" class="nav-logo-img">
                </router-link>

                <div class="nav__wrapper" :class="{'opened': navOpened}">
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for="(link, idx) in store.list" :key="idx">
                            <router-link :to="`/${link.url}`" class="nav__list-link" @click="navOpened = false">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <router-link to="/cart" class="shop-cart">
                    <lord-icon src="https://cdn.lordicon.com/evyuuwna.json" trigger="loop" delay="1300" colors="primary:#ffffff" style="width:35px;height:35px" class="shop-cart-icon"></lord-icon>

                    <span class="cart-status" >{{ cartStatus }}</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";
import { cartStore } from "@/stores/cartStore.js";

export default {
    name: 'Navigation',
    data() {
        return {
            store: navStore(),
            screenSize: window.innerWidth,
            navOpened: false
        }
    },
    computed: {
        cartStatus() {
            return cartStore().cartList.length
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.screenSize = window.innerWidth
        })
    }
}

</script>

<style lang="scss" scoped>

@keyframes colorGlitch {
    from {
        color: var(--main-pink);
    }
    50% {
        color: #4D57C8;
    }
    to {
        color: var(--main-pink);
    }
}

.nav {
    width: 100%;
    padding: 7px 0;
    background: var(--main-black);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2024;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 35px;
    }

    &-logo {
        max-width: 150px;
        width: 100%;

        &-img {
            width: 100%;
            display: block;
        }
    }

    &__wrapper {
        max-width: max-content;
        width: 100%;
        margin-left: auto;
    }

    &__list {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 30px;

        &-link {
            color: var(--main-white);
            font-size: 18px;
            font-weight: 500;
            transition: .3s;

            &:hover, &.router-link-exact-active {
                color: var(--main-pink);
            }

            &.router-link-exact-active {
                animation: name duration timing-function delay iteration-count direction fill-mode;
                animation: colorGlitch 2s infinite linear;
            }
        }
    }

    .shop-cart {
        font-size: 22px;
        display: flex;

        &-icon {
            fill: var(--main-white);
            transition: .3s;
        }

        &:hover {
            &-icon {
                color: var(--main-pink);
            }
        }


        .cart-status {
            height: max-content;
            width: 20px;
            height: 20px;
            font-size: 13px;
            font-weight: 700;
            display: grid;
            place-items: center;
            background: var(--main-white);
            border-radius: 50%;
        }
        
        &.router-link-exact-active {
            .cart-status {
                background: var(--main-pink);
                color: var(--main-white);
            }
        }
    }

    &-mb-btn {
        font-size: 25px;
        background: transparent;
        border: 0;
        outline: 0;
        padding: 0 5px;
        z-index: 20001;
        i {
            color: var(--main-white);
            transition: .3s;
        }

        &:hover, &:active {
            i {
                color: var(--main-pink);
            }
        }
    }
}

@media (max-width: 992px) {

    .row {
        gap: 0 !important;
    }

    .nav__wrapper {
        height: 100dvh;
        position: fixed;
        top: 0;
        left: 0;
        background: var(--main-black);
        z-index: 10001;
        padding: 10px 25px;
        transform: translateX(-120%);
        transition: .4s;

        &.opened {
            transform: translateX(0);
        }

        .nav__list {
            flex-direction: column;
            align-items: flex-start;
            height: 100% !important;
            justify-content: center;
            row-gap: 20px;
        }
    }
}

</style>