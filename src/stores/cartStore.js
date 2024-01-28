import { defineStore } from "pinia";

export const cartStore = defineStore('Cart Store', {
    state: () => ({
        products: []
    })
})