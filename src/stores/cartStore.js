import { defineStore } from "pinia";

export const cartStore = defineStore('Cart Store', {
    state: () => ({
        title: "Корзина заказа",
        cartList: [],
        noProductTxt: "нет выбранных товаров",
        popover: {
            opened: false,
            txt: 'Заказ принято'
        }
    }),
    getters: {
        totalPrice() {
            let price = 0;
            this.cartList.map((item) => {(price += item.price.new * item.amount)});
            return price;
        }
    }
})