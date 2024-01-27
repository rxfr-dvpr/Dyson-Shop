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
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
    name: 'Navigation',
    data() {
        return {
            store: navStore()
        }
    }
}

</script>

<style lang="scss" scoped>

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
        max-width: 920px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 30px;

        &-link {
            color: var(--main-white);
            font-size: 18px;
            font-weight: 500;
            transition: .3s;

            &:hover {
                color: var(--main-pink);
            }
        }
    }

    .shop-cart {
        font-size: 22px;

        &-icon {
            fill: var(--main-white);
            transition: .3s;
        }

        &:hover {
            &-icon {
                color: var(--main-pink);
            }
        }
    }
}

</style>