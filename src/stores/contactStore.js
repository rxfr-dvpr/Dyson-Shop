import { defineStore } from "pinia";

export const contactStore = defineStore('Contact Store', {
    state: () => ({
        contactForm: {
            title: 'Свяжитесь с нами',
            btn: 'Оставить заявку'
        },
        subscribeForm: {
            title: 'Подпишитесь на новости',
            btn: 'Подписаться',
            checkboxTxt: 'Я ознакомлен(а) с политикой конфиденциальности и согласен(а) с обработкой персональных данных.'
        }
    })
})