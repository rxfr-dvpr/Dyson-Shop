import { defineStore } from "pinia";

export const categoryStore = defineStore('Category Store', {
    state: () => ({
        list: [
            {
                name: 'акции',
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/CategorySection%2Faksii.png?alt=media&token=539bd3e0-1873-4247-8a22-2accfb0bd791'
            },
            {
                name: 'фены',
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/CategorySection%2Ffen.png?alt=media&token=6cf082ad-3658-40df-b577-1cbfb29793ea'
            },
            {
                name: 'стайлеры',
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/CategorySection%2Fstayler.png?alt=media&token=63c0defe-c06a-4496-816d-aa0871182e53'
            },
            {
                name: 'выпрямители',
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/CategorySection%2Fvipramitel.png?alt=media&token=9103a576-a948-4c7a-95b2-e8087aa3e405'
            }
        ]
    })
})