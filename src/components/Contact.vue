<template>
  <section class="contact__section all-padding">
    <div class="container">
        <div class="row">
            <form action="POST" @submit.prevent class="contact-form all-form">
                <p class="contact-form-title all-title">{{ store.contactForm.title }}</p>

                <input type="text" class="contact-form-name all-inp" 
                required placeholder="Ваше имя" v-model="nameVal">
                <input type="number" class="contact-form-number all-inp" 
                required placeholder="Ваш номер телефона" v-model="numVal">

                <button class="contact-form-btn all-btn dark">{{ store.contactForm.btn }}</button>
            </form>

            <form action="POST" @submit.prevent="checked ? subscribe() : ''" class="subscribe-form all-form">
                <p class="subscribe-form-title all-title">{{ store.subscribeForm.title }}</p>

                <input type="email" class="subscribe-form-name all-inp" required placeholder="Ваш e-mail" v-model="emailVal">

                <button class="subscribe-form-btn all-btn dark">{{ store.subscribeForm.btn }}</button>

                <span class="subscribe-check" @click="checked = !checked">
                    <span class="checkbox" :class="{ checked }"><i class="far fa-check checkbox-icon"></i></span>
                    <label for="subscribe-checkbox">{{ store.subscribeForm.checkboxTxt }}</label>
                </span>
            </form>
        </div>
    </div>
  </section>
</template>

<script>
import { contactStore } from "@/stores/contactStore.js";

export default {
    name: 'Contact Section',
    data() {
        return {
            store: contactStore(),
            checked: false,
            nameVal: '',
            numVal: '',
            emailVal: ''
        }
    },
    methods: {
        subscribe() {
            alert('Email Sended :)')
            this.emailVal = ''
        }
    }
}

</script>

<style lang="scss" scoped>

.contact__section {
    width: 100%;
    background: #F8F8F8;

    .row {
        justify-content: space-between;
        row-gap: 35px;
        column-gap: 20px;
        flex-wrap: unset;
    }

    .all-form {
        max-width: 555px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        .all-inp {
            width: 100%;
            border: 0;
            outline: none;
            background: transparent;
            padding-bottom: 15px;
            border-bottom: 1px solid #000;
            font-size: 17px;
        }
    }

    .subscribe-check {
        display: flex;
        gap: 15px;
        align-items: center;
        font-size: calc(10px + 5 * (100vw / 1920));
        user-select: none;
        cursor: pointer;

        label {
            cursor: pointer;
        }

        .checkbox {            
            width: 25px;
            height: 20px;
            border: solid 1px var(--main-black);
            border-radius: 3px;
            display: grid;
            place-items: center;
            padding-top: 1px;

            .checkbox-icon {
                color: var(--main-pink);
                opacity: 0;
                transition: .3s;
            }

            &.checked {
                .checkbox-icon {
                    opacity: 1;
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    .subscribe-check {
        font-size: 15px !important;
    }
}

@media (max-width: 800px) {
    .row {
        flex-direction: column;
    }

    .all-form {
        max-width: 100% !important;
    }

    .checkbox {
        width: 15px !important;
        height: 15px !important;
    }
}

</style>