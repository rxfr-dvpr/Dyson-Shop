import { defineStore } from "pinia";

export const productsStore = defineStore('Products Store', {
    state: () => ({
        title: 'Спецпредложения',
        products: [
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/ProductsSection%2F1.png?alt=media&token=de8d3728-421c-4775-9f30-b71ebb4492f4',
                name: 'Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческамия',
                status: {
                    available: true,
                    discount: 10
                },
                price: {
                    new: 59990,
                    old: 69990
                }
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/ProductsSection%2F2.png?alt=media&token=77e77274-acfd-4c33-9c98-b1351ec4d9c4',
                name: 'Фен Dyson Supersonic HD07 с 5 насадками и подставкой',
                status: {
                    available: true,
                    discount: 8
                },
                price: {
                    new: 47990,
                    old: 51990
                }
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/ProductsSection%2F3.png?alt=media&token=0c9b0ba3-4c99-4328-b42b-eae56bf9eeca',
                name: 'Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень',
                status: {
                    available: true,
                    discount: 9
                },
                price: {
                    new: 46990,
                    old: 51990
                }
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/ProductsSection%2F4.png?alt=media&token=d66d6c6d-1a0c-4607-bb20-ca2c0b4a95c5',
                name: 'Мультистайлер HS05 Airwrap Complete Long + сумка в подарок',
                status: {
                    available: false,
                    discount: 50
                },
                price: {
                    new: 43215,
                    old: 86431
                }
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/ProductsSection%2F5.jpg?alt=media&token=2ca84416-1071-4d60-9c52-0a02bb4946a1',
                name: 'Мультистайлеры Dyson HS05 Long Topaz Orange',
                status: {
                    available: true,
                    discount: 12
                },
                price: {
                    new: 80913,
                    old: 91560
                }
            },
            {
                img: 'https://firebasestorage.googleapis.com/v0/b/dyson-shop-dfb32.appspot.com/o/ProductsSection%2F6.jpg?alt=media&token=9cb0c6f3-4470-40a8-9ebc-e82bb8d668cb',
                name: 'Стайлер Dyson Airwrap Complete Long Nickel/Copper',
                status: {
                    available: true,
                    discount: 13
                },
                price: {
                    new: 73699,
                    old: 85325
                }
            },
        ],
        tags: [
            {
                name: 'dyson стайлер для длинных волос',
                type: '',
                active: false
            },
            {
                name: 'dyson стайлер красный',
                type: '',
                active: false
            },
            {
                name: 'dyson hs01 airwrap compliete',
                type: '',
                active: false
            },
            {
                name: 'фен щетка дайсон',
                type: '',
                active: false
            },
        ]
    })
})