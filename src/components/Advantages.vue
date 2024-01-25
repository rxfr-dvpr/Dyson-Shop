<template>
  <section class="advantages__section">
    <div class="container">
        <div class="row">
            <h2 class="advantages-title all-title">{{ store.title }}</h2>

            <div class="advantages__cards">
                <div class="advantages__cards-item" v-for="card in store.cards" :key="card">
                    <span class="item-icon" v-html="card.icon"></span>
                    <p class="item-name">{{ card.name }}</p>
                    <p class="item-txt all-txt">{{ card.txt }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { advStore } from "@/stores/advStore.js";

export default {
    name: 'Advantages',
    data() {
        return {
            store: advStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.advantages__section {
    width: 100%;
    padding: 150px 0;

    .row {
        flex-direction: column;
        row-gap: 60px;
    }

    .advantages__cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;

        &-item {
            max-width: 430px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 12px;
            padding: 25px 0 45px;
            background: #FFF;
            box-shadow: 0px 4px 41px 0px rgba(0, 0, 0, 0.05);

            .item-icon {
                font-size: calc(25px + 20 * (100vw / 1920));
                margin-bottom: 15px;
            }

            .item-name {
                font-size: calc(13px + 7 * (100vw / 1920));
                font-weight: 600;
                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .item-txt {
                max-width: 230px;
                font-weight: 300;
            }
        }
    }
}

@media (min-width: 1920px) {
    .item-icon {
        font-size: 45px !important;
    }    

    .item-name {
        font-size: 20px !important;
    }
}

</style>