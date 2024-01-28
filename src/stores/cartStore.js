import { defineStore } from "pinia";

export const cartStore = defineStore('Cart Store', {
    state: () => ({
        title: "Корзина заказа",
        cartList: [],
        noProductTxt: "нет выбранных товаров"
    })
})