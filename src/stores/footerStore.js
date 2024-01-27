import { defineStore } from "pinia";

export const footerStore = defineStore('Footer Store', {
    state: () => ({
        logoImg: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/dyson-logo.svg?alt=media&token=4ed8c784-abef-4ae8-a797-3ee21ce707e3',
        links: [
            {
                title: 'Магазин',
                list: [
                    {
                        name: 'Фены Dyson Supersonic',
                        url: '/category'
                    },
                    {
                        name: 'Стайлеры Dyson Airwrap',
                        url: '/category'
                    },
                    {
                        name: 'Выпрямители Dyson Corrale',
                        url: '/category'
                    },
                    {
                        name: 'Пылесосы',
                        url: '/category'
                    },
                    {
                        name: 'Климатическая техника',
                        url: '/category'
                    },
                    {
                        name: 'Освещение',
                        url: '/category'
                    },
                    {
                        name: 'Аксессуары',
                        url: '/category'
                    },
                ]
            },
            {
                title: 'Общая информация',
                list: [
                    {
                        name: 'Новости',
                        url: '/'
                    },
                    {
                        name: 'Доставка',
                        url: '/'
                    },
                    {
                        name: 'Гарантия',
                        url: '/'
                    },
                    {
                        name: 'Оплата товара',
                        url: '/'
                    },
                    {
                        name: 'Свяжитесь с нами',
                        url: '/'
                    },
                    {
                        name: 'Политика конфиденциальности',
                        url: '/'
                    },
                    {
                        name: 'Договор оферты',
                        url: '/'
                    },
                ]
            },
            {
                title: 'Акции',
                list: [
                    {
                        name: 'Подарочная коллекция',
                        url: '/'
                    },
                    {
                        name: 'Эксклюзивные предложения',
                        url: '/'
                    },
                ]
            },
        ],
        contact: {
            title: 'Отдел логистики:',
            number: '+998 (99) 817-30-66'
        },
        webLinks: [
            {
                icon: '<i class="fab fa-telegram-plane"></i>',
                url: 'https://t.me/redfox4ever'
            },
            {
                icon: '<i class="fab fa-instagram"></i>',
                url: 'https://www.instagram.com/rxfr_dvpr/'
            },
            {
                icon: '<i class="fab fa-github"></i>',
                url: 'https://github.com/rxfr-dvpr'
            }
        ]
    })
})