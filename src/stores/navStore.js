import { defineStore  } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        list: [
            {
                name: 'О нас',
                url: 'about'
            },
            {
                name: 'Доставка и оплата',
                url: 'payment'
            },
            {
                name: 'Регистрация продукта',
                url: 'seller'
            },
            {
                name: 'Сервис',
                url: 'service'
            },
            {
                name: 'Сертификаты и лицензии',
                url: 'license'
            }
        ],
        logoUrl: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/dyson-logo.svg?alt=media&token=4ed8c784-abef-4ae8-a797-3ee21ce707e3'
    })
})
