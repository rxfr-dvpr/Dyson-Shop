import { defineStore  } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        list: [
            {
                name: 'Главная',
                url: ''
            },
            {
                name: 'Категории',
                url: 'category'
            }
        ],
        logoUrl: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/dyson-logo.svg?alt=media&token=4ed8c784-abef-4ae8-a797-3ee21ce707e3'
    })
})
