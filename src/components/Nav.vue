<template>
    <nav class="nav">
        <div class="container">
            <div class="row">

                <router-link to="/" class="nav-logo">
                    <img :src="store.logoUrl" alt="" class="nav-logo-img">
                </router-link>

                <ul class="nav__list">
                    <li class="nav__list-item" v-for="(link, idx) in store.list" :key="idx">
                        <router-link :to="`/${link.url}`" class="nav__list-link">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>

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
            store: navStore()
        }
    },
    computed: {
        cartStatus() {
            return cartStore().cartList.length
        }
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
        gap: 45px;
    }

    &-logo {
        max-width: 150px;
        width: 100%;

        &-img {
            width: 100%;
            display: block;
        }
    }

    &__list {
        max-width: max-content;
        width: 100%;
        display: flex;
        align-items: center;
        margin-left: auto;
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
}

</style>