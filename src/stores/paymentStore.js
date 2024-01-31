import { defineStore } from "pinia";

export const paymentStore = defineStore('Payment Store', {
    state: () => ({
        title: 'платеж',
        cardType: {
            title: 'Тип карты',
            types: [
                {
                    icon: '<i class="fab fa-cc-visa"></i>',
                    selected: true
                },
                {
                    icon: '<i class="fab fa-cc-amazon-pay"></i>',
                    selected: false
                },
                {
                    icon: '<i class="fab fa-cc-apple-pay"></i>',
                    selected: false
                }
            ]
        },
        cardName: {
            name: 'Имя на карте',
            value: '',
            plcHolder: 'Имя'
        },
        cardNum: {
            name: 'Номер карты',
            value: '',
            plcHolder: '1111 2222 3333 4444'
        },
        exprDate: {
            name: 'Дата окончания срока',
            value: '',
            plcHolder: 'mm/yy'
        },
        ccvInp: {
            name: 'CCV',
            input: 'number',
            plcHolder: '123'
        }
    })
})