<template>
  <section class="ordering__section all-padding">
    <div class="container">
        <div class="row">
            <h2 class="ordering-title all-title">{{ store.orderTitle }}</h2>

            <div class="ordering-steps">
                <div class="ordering-steps-item" v-for="(order, idx) in store.orderSteps" :key="idx">
                    <span class="order-num all-title">{{ idx + 1 }}</span>

                    <h4 class="order-name">{{ order.name }}</h4>

                    <p class="order-txt all-txt">{{ order.txt }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { orderStore } from "@/stores/orderStore.js";

export default {
    name: 'Ordering Section',
    data() {
        return {
            store: orderStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.ordering__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 60px;
    }

    .ordering-steps {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        &-item {
            max-width: 440px;
            width: 100%;
            box-shadow: 0px 4px 41px 0px rgba(0, 0, 0, 0.05);
            padding: 35px 30px 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 12px;

            .order-num {
                margin-bottom: 18px;
                width: 85px;
                height: 85px;
                border-radius: 50%;
                background: var(--main-pink);
                color: var(--main-white);
                display: grid;
                place-items: center;
                font-weight: 600;
            }

            .order-name {
                font-size: 20px;
                font-weight: 600;
            }

            .order-txt {
                font-weight: 300;
            }
        }
    }
}


@media (max-width: 876px) {
    .ordering-steps {
        grid-template-columns: repeat(2, 1fr) !important;
        justify-items: center;

        .order-num {
            width: 70px !important;
            height: 70px !important;
        }
    }
}

@media (max-width: 576px) {
    .ordering-steps {
        grid-template-columns: repeat(1, 1fr) !important;

        .order-num {
            width: 60px !important;
            height: 60px !important;
        }
    }
}
</style>