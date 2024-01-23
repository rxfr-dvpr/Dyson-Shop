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

                <router-link to="/cart" class="shop-cart"><i class="fa-light fa-bag-shopping"></i></router-link>

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

        i {
            color: var(--main-white);
            transition: .3s;
        }

        &:hover {
            i {
                color: var(--main-pink);
            }
        }
    }
}

</style>