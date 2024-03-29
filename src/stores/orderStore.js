import { defineStore } from "pinia";

export const orderStore = defineStore('Ordering Store', {
    state: () => ({
        orderTitle: 'Как оформить заказ',
        orderSteps: [
            {
                name: 'Оставьте заявку',
                txt: 'Выберите цвет стайлера и заполните форму'
            },
            {
                name: 'Дождитесь звонка',
                txt: 'Наш менеджер свяжется с Вами, в течении 24 часов, чтобы уточнить детали заказа'
            },
            {
                name: 'Получите заказ',
                txt: 'Получите заказ у курьера или в отделении транспортной компании'
            },
        ]
    })
})