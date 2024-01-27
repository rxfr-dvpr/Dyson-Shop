<template>
  <footer class="footer">
    <div class="container">
        <div class="row">
            <router-link to="/" class="footer-logo">
                <img :src="store.logoImg" alt="" class="footer-logo-img">
            </router-link>

            <div class="footer__wrapper">
                <ul class="footer__list" v-for="(list, idx) in store.links" :key="idx">
                    <span class="footer__list-title">{{ list.title }}</span>

                    <li class="footer__list-item" v-for="link in list.list" :key="link">
                        <router-link :to="link.url" class="footer__list-link all-txt">
                            {{ link.name }}
                        </router-link>
                    </li>
                </ul>

                <div class="footer__contact">
                    <div class="footer__contact-top">
                        <span class="footer__contact-top-title">{{ store.contact.title }}</span>

                        <a href="tel:+998998173066" class="footer__contact-top-num">{{ store.contact.number }}</a>
                    </div>

                    <div class="footer__socials">
                        <a :href="social.url" class="footer__socials-item" target="_blank" 
                    v-for="(social, idx) in store.webLinks" :key="idx" v-html="social.icon"></a>
                    </div>
                </div>
            </div>

            <span class="copyright-txt all-txt">
                {{ `Интернет-магазин - ${new Date().getFullYear()} © RXFR.` }}
            </span>

        </div>
    </div>
  </footer>
</template>

<script>
import { footerStore } from "@/stores/footerStore";

export default {
    name: 'Footer',
    data() {
        return {
            store: footerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 50px 0 45px;
    background: var(--main-black);

    &-logo {
        max-width: 150px;
        width: 100%;

        &-img {
            width: 100%;
            display: block;
        }
    }

    .row {
        flex-direction: column;
        row-gap: 35px;
    }

    &__wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    &__list, &__contact-top {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        &-title {
            color: var(--main-white);
            font-size: 24px;
            font-weight: 500;
        }

        &-link {
            color: #909090;
            transition: .3s;

            &:hover {
                color: var(--main-pink);
            }
        }

        &-num {
            transition: .3s;
            font-size: 20px;
            color: var(--main-white);

            &:hover {
                color: var(--main-pink);
            }
        }
    }

    &__contact {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .footer__socials {
            display: flex;
            gap: 20px;

            &-item {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2px .5px 0 0;
                font-size: 22px;
                background: var(--main-white);
                transition: .4s;

                &:hover {
                    background: var(--main-pink);
                }
            }
        }
    }

    .copyright-txt {
        text-align: center;
        color: var(--main-white);
        font-weight: 200;
    }
}

</style>