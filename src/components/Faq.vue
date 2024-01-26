<template>
  <section class="faq__section all-padding">
    <div class="container">
        <div class="row">
            <h2 class="faq-title all-title">{{ store.title }}</h2>

            <div class="faq__list">
                <div class="faq__list-item" v-for="(item, idx) in store.questionsList" 
                :key="idx" :class="{'opened': item.opened}" @click="item.opened = !item.opened">
                    <span class="faq-question">
                        {{ item.question }} <span class="plus-btn"><i class="fal fa-plus"></i></span>
                    </span>

                    <p class="faq-answer all-txt">{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { faqStore } from "@/stores/faqStore.js";

export default {
    name: 'FAQ Section',
    data() {
        return {
            store: faqStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.faq__section {
    width: 100%;
    background: #F8F8F8;

    .row {
        flex-direction: column;
        row-gap: 60px;
    }

    .faq__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 35px;
        border-bottom: 1px solid var(--main-black);
        padding-bottom: 35px;

        &-item {
            width: 100%;
            display: flex;
            flex-direction: column;
            border-top: 1px solid var(--main-black);
            padding-top: 35px;
            transition: .2s;

            .faq-question {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 20px;
                font-weight: 600;
                cursor: pointer;

                .plus-btn {
                    font-size: 35px;
                    font-weight: 400;
                    transition: .3s;

                    i {
                        transition: .3s;
                    }
                }
            }

            .faq-answer {
                max-width: 1200px;
                width: 100%;
                height: 0;
                transition: .3s;
                opacity: 0;
                overflow: hidden;
            }

            &.opened {
                .plus-btn {
                    transform: rotate(45deg);

                    i {
                        color: var(--main-pink);
                    }
                }

                .faq-answer {
                    height: 100%;
                    margin-top: 15px;
                    opacity: 1;
                }
            }
        }
    }
}

</style>