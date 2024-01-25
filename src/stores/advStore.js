import { defineStore } from "pinia";

export const advStore = defineStore('Advantages Store', {
    state: () => ({
        title: 'почему выбирают нас',
        cards: [
            {
                icon: '<i class="fal fa-shopping-cart"></i>',
                name: 'широкий ассортимент',
                txt: 'большой выбор техникии аксессуаров'
            },
            {
                icon: '<i class="fal fa-truck-container"></i>',
                name: 'быстрая доставка',
                txt: 'по Москве — 2-3 часа; По России — 2-4 дня'
            },
            {
                icon: '<i class="fal fa-badge-percent"></i>',
                name: 'специальное предложение',
                txt: 'только для клиентов нашего сайта'
            },
            {
                icon: '<i class="fas fa-file-certificate"></i>',
                name: 'гарантия производителя',
                txt: 'гарантия 2 года на устройства и аксессуары'
            },
            {
                icon: '<i class="far fa-user-shield"></i>',
                name: 'безопасная оплата',
                txt: 'оплата после получения товара'
            },
            {
                icon: '<i class="fal fa-phone-office"></i>',
                name: 'бесплатная консультация',
                txt: 'в любом удобном для вас формате, 7 дней в неделю'
            },
        ]
    })
})