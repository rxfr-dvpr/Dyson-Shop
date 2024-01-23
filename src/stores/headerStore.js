import { defineStore } from "pinia";

export const headerStore = defineStore('Header Store', {
    state: () => ({
        title: 'уникальные технологии для ухода за волосами',
        txt: 'идеальная укладка для всех типов волос вместе с Dyson',
        btnTxt: 'подробнее',
        img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/Header%2Fheader-img.png?alt=media&token=c51f57a3-ef3a-46fb-b143-14bdbdbbd820'
    })
})