<template>
  <section class="reviews__section all-padding">
    <div class="container">
        <div class="row">
            <h2 class="reviews-title all-title">{{ store.title }}</h2>

            <div class="review__form">
                <span class="review__form-rate">
                    <span class="rate-nums"><span class="rating-num">{{ rateNum }}</span> / 5</span>
                    
                    <span class="rate-stars">
                        <i class="fas fa-star"  v-for="star in 5" :key="star"></i>
                    </span>
                </span>

                <button class="review__form-btn">{{ store.form.createBtn }}</button>
            </div>

            <div class="reviews__list">
                <div class="reviews__list-item" v-for="(item, idx) in store.reviews" :key="idx">
                    <div class="review-main">
                        <p class="review-main-author frstUpper" title="Author">{{ item.name }}</p>

                        <span class="review-main-stars">
                            <i class="fas fa-star" title="Star" v-for="star in item.stars" :key="star"></i>
                        </span>
                    </div>

                    <div class="review-body">
                        <p class="review-body-title frstUpper">{{ item.title }}</p>

                        <p class="review-body-msg all-txt">{{ item.msg }}</p>
                    </div>

                    <span class="review-date all-txt">{{ item.date }}</span>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { reviewsStore } from "@/stores/reviewsStore.js";

export default {
    name: 'Reviews Section',
    data() {
        return {
            store: reviewsStore(),
            rateNum: 5
        }
    }
}

</script>

<style lang="scss" scoped>

.reviews__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 30px;
    }

    .reviews__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid rgba($color: #ABABAB, $alpha: .5);

        &-item {
            width: 100%;
            display: flex;
            border-top: 1px solid rgba($color: #ABABAB, $alpha: .5);
            padding: 40px 0;
            row-gap: 10px;

            .review-main {
                max-width: 160px;
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 10px;

                &-author {
                    font-size: 20px;
                    font-weight: 500;
                }

                .review-main-stars {
                    display: flex;
                    gap: 2px;

                    i {
                        color: var(--main-pink);
                    }
                }
            }

            .review-body {
                max-width: 785px;
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 9px;

                &-title {
                    font-size: 20px;
                    font-weight: 600;
                }
            }

            .review-date {
                color: #909090;
                margin-left: auto;
            }
        }
    }

    .review__form {
        width: 100%;
        display: flex;

        &-rate {
            max-width: 160px;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 5px;

            .rate-nums {
                font-size: 20px;
                font-weight: 600;

                .rating-num {
                    font-size: 30px;
                }
            }

            .rate-stars {
                display: flex;
                gap: 2px;

                i {
                    color: var(--main-pink);
                }
            }
        }
    }
}

</style>