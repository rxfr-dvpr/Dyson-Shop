<template>
  <form action="POST" class="payment-widget" @submit.prevent="pay">
    <h3 class="widget-title frstUpper">{{ store.title }}</h3>

    <p class="card-type-title all-txt">{{ store.cardType.title }}</p>

    <div class="card__types">
      <span
        class="card__types-item"
        v-for="(item, idx) in store.cardType.types"
        :key="idx"
        v-html="item.icon"
        @click="selectCard(idx)"
        :class="{ active: item.selected }"
      ></span>
    </div>

    <div class="payment-box">
      <label for="holder-name" class="payment-box-name">{{
        store.cardName.name
      }}</label>
      <input
        type="text"
        class="payment-box-inp"
        id="holder-name"
        v-model="store.cardName.value"
        :placeholder="store.cardName.plcHolder"
        required
      />
    </div>

    <div class="payment-box">
      <label for="card-num" class="payment-box-name">{{
        store.cardNum.name
      }}</label>
      <input
        type="text"
        class="payment-box-inp"
        id="card-num"
        maxlength="16"
        v-model.number="store.cardNum.value"
        :placeholder="store.cardNum.plcHolder"
        required
      />
    </div>

    <div class="payment-wrapper">
      <div class="payment-box wrap-inp">
        <label for="expr" class="payment-box-name">{{
          store.exprDate.name
        }}</label>
        <input
          type="text"
          class="payment-box-inp"
          id="expr"
          maxlength="4"
          v-model="store.exprDate.value"
          :placeholder="store.exprDate.plcHolder"
          required
        />
      </div>

      <div class="payment-box wrap-inp">
        <label for="ccv" class="payment-box-name">{{
          store.ccvInp.name
        }}</label>
        <input
          type="text"
          class="payment-box-inp"
          id="ccv"
          maxlength="3"
          v-model.number="store.ccvInp.value"
          :placeholder="store.ccvInp.plcHolder"
          required
        />
      </div>
    </div>

    <div class="payment-bottom">
      <span class="payment-subtotal total-txt"
        >Цена товаров <span class="num">{{ splitPrice(cartStore.totalPrice) }} ₽</span></span
      >
      <span class="payment-shipping total-txt"
        >Доставка
        <span class="num">{{ shipment }} ₽</span></span
      >

      <span class="payment-total total-txt"
        >Итого (+ налоги)
        <span class="num">{{ splitPrice(cartStore.totalPrice + shipment) }} ₽</span></span
      >
    </div>

    <button class="pay-btn all-btn dark" type="submit" :disabled="cartStore.popover.opened">
      {{ splitPrice(cartStore.totalPrice + shipment) }} ₽ <span class="btn-txt">Оплатить <i class="fal fa-long-arrow-right"></i></span>
    </button>
  </form>
</template>

<script>
import { paymentStore } from "@/stores/paymentStore.js";
import { cartStore } from "@/stores/cartStore.js";

export default {
  name: "Payment Side",
  data() {
    return {
      store: paymentStore(),
      cartStore: cartStore(),
    };
  },
  methods: {
    selectCard(idx) {
      this.store.cardType.types.map((item) => (item.selected = false));
      this.store.cardType.types[idx].selected = true;
    },
    splitPrice(price) {
      price = price.toString().split("");

      if (price.length == 6) {
        price.splice(3, 0, " ");
      } else if (price.length == 5) {
        price.splice(2, 0, " ");
      } else if (price.length == 7) {
        price.splice(1, 0, " ");
        price.splice(5, 0, " ");
      } else if (price.length == 8) {
        price.splice(2, 0, " ");
        price.splice(6, 0, " ");
      } else if (price.length == 9) {
        price.splice(3, 0, " ");
        price.splice(7, 0, " ");
      } else {
        price == price;
      }

      let editedPrice = price.join("");
      return editedPrice;
    },
    pay() {
      const store = this.store
      if (store.cardName.value !== '' && store.cardNum.value !== '' 
      && store.exprDate.value !== '' && store.ccvInp.value !== '') {
        this.cartStore.popover.opened = true
        store.cardName.value = store.cardNum.value = store.exprDate.value = store.ccvInp.value = ''

        setTimeout(() => {
          this.cartStore.popover.opened = false
        }, 2000);

        this.cartStore.cartList = []

        setTimeout(() => {
          this.$router.push('/')
        }, 1500);
      }
    }
  },
  computed: {
    shipment() {
      return Math.round(this.cartStore.totalPrice / 1000) 
    }
  },
};
</script>

<style lang="scss" scoped>

.payment-widget {
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 20px;
  background: var(--main-black);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  height: max-content;

  .widget-title {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--main-white);
  }

  .card-type-title {
    font-weight: 500;
    color: var(--main-white);
  }

  .card__types {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;

    &-item {
      font-size: calc(40px + 10 * (100vw / 1920));
      padding: 0px 10px;
      background: rgba($color: #d9d9d933, $alpha: 0.1);
      border-radius: 10px;
      transition: 0.3s;
      cursor: pointer;
    }
  }

  .payment-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    &-name {
      font-size: 14px;
      color: var(--main-white);
    }

    &-inp {
      width: 100%;
      padding: 10px 18px;
      border-radius: 6px;
      border: 0;
      background: rgba($color: #fff, $alpha: 0.1);
      color: var(--main-white);
      outline: none;
    }
  }

  .payment-wrapper {
    width: 100%;
    display: flex;
    gap: 8px;

    .wrap-inp {
      max-width: 50%;
    }
  }

  .payment-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    border-top: 1px solid rgba($color: #fff, $alpha: 0.1);
    padding-top: 15px;

    .total-txt {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--main-white);
      font-size: 14px;

      &::first-letter {
        text-transform: uppercase;
      }

      .num {
        color: var(--main-white);
      }
    }
  }

  .pay-btn {
    max-width: 100%;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    background: #4D57C8;
    align-items: center;
    margin-top: 10px;

    .btn-txt {
      color: var(--main-white);
      display: flex;
      gap: 10px;
      align-items: center;

      i {
        font-size: 20px;
        color: var(--main-white);
        margin-top: 4px;
      }
    }
  }
}

@media (min-width: 1920px) {
  .card__types-item {
    font-size: 50px !important;
  }
}

@media (max-width: 1400px) {
  .payment-widget {
    max-width: 350px;
  }
}

@media (max-width: 1024px) {
  .payment-widget {
    max-width: 450px;
  } 
}


@media (max-width: 376px) {
  .payment-wrapper {
    flex-direction: column;

    .wrap-inp {
      max-width: 100% !important;
    }
  }   
}
</style>
