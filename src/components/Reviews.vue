<template>
  <section class="reviews__section all-padding">
    <div class="container">
        <div class="row">
            <h2 class="reviews-title all-title">{{ store.title }}</h2>

            <div class="review__form">
                <span class="review__form-rate">
                    <span class="rate-nums"><span class="rating-num">{{ rateNum }}</span> / 5</span>
                    
                    <span class="rate-stars">
                        <i class="fas fa-star" v-for="(star) in 5"
                         :key="star" @click="this.rateNum = star"></i>
                    </span>
                </span>

                <button class="review__form-btn all-btn" @click="modalVisible = true">
                    {{ store.form.createBtn }}
                </button>
            </div>
        
            <Transition name="review-modal">
                <div class="review__modal" v-show="modalVisible">
                    <Transition name="review-modal-inner">
                        <form class="review__modal-form" v-show="modalVisible" 
                        action="POST" @submit.prevent="sendReview">
                            <span class="close-btn" @click="modalVisible = false">
                                <i class="fal fa-times"></i>
                            </span>

                            <p class="review__modal-title frstUpper">{{ store.form.title }}</p>

                            <span class="review__form-rate modal">
                                <span class="rate-nums"><span class="rating-num">{{ rateNum }}</span> / 5</span>
                                
                                <span class="rate-stars">
                                    <i class="fas fa-star" v-for="(star) in 5"
                                     :key="star" @click="this.rateNum = star"></i>
                                </span>
                            </span>

                            <input type="text" class="modal-inp name all-txt" 
                            placeholder="Ваше имя" required v-model="nameInp" maxlength="35">

                            <input type="text" class="modal-inp title all-txt" 
                            placeholder="Заголовок" required v-model="titleInp">

                            <textarea placeholder="Комментарий" v-model="msgInp" 
                            class="modal-inp msg all-txt" rows="10" required></textarea>

                            <button class="review__modal-btn all-btn dark">
                                {{ store.form.modalBtn }}
                            </button>
                        </form>
                    </Transition>
                </div>
            </Transition>

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
            rateNum: 5,
            modalVisible: false,
            nameInp: '',
            titleInp: '',
            msgInp: ''
        }
    },
    methods: {
        getDate() {
            return `${new Date().getDate()}/0${new Date().getMonth() + 1}/${new Date().getFullYear()}`
        },
        sendReview() {
            this.store.reviews.unshift(
                {
                    name: this.nameInp,
                    stars: this.rateNum,
                    title: this.titleInp,
                    msg: this.msgInp,
                    date: this.getDate()
                }
            )

            this.nameInp = this.titleInp = this.msgInp = ''
            this.modalVisible = false
            this.rateNum = 5
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
            row-gap: 15px;
            column-gap: 30px;

            .review-main {
                max-width: 130px;
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 10px;

                &-author {
                    width: 100%;
                    font-size: 20px;
                    font-weight: 500;
                    word-wrap: break-word;
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
                    width: 100%;
                    word-wrap: break-word;
                    font-size: 20px;
                    font-weight: 600;
                }

                &-msg {
                    width: 100%;
                    word-wrap: break-word;
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
        row-gap: 15px;

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
                    cursor: pointer;
                }
            } 
        }

        &-btn {
            color: var(--main-black);
            background: transparent;
            border: solid 1px var(--main-black);
        }
    }

    .review__modal {
        width: 100%;
        height: 100dvh;
        background: rgba($color: #000, $alpha: .6);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3000;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
        padding: 20px;

        &-form {
            max-width: 745px;
            width: 100%;
            overflow-y: auto;
            padding: 20px 25px 60px 80px;
            background: var(--main-white);
            display: flex;
            flex-direction: column;
            border-radius: 3px;

            .close-btn {
                margin-left: auto;
                font-size: 20px;
                padding: 0 5px;
                background: transparent;
                font-size: 25px;
                opacity: .5;
                cursor: pointer;
                transition: .3s;

                i {
                    color: var(--main-black);
                    transition: .3s;
                }

                &:hover {
                    opacity: 1;
                    i {
                        color: var(--main-pink);
                    }
                }
            }

            .modal-inp {
                max-width: 585px;
                width: 100%;
                border-radius: 3px;
                border: 1px solid #D9D9D9;
                padding: 10px;
                margin-bottom: 20px;
                outline-color: var(--main-pink);
                font-weight: 400;

                &::placeholder {
                    color: #ABABAB;
                }

                &.name {
                    margin-top: 20px;
                }

                &.msg {
                    resize: vertical;
                }
            }
        }

        &-title {
            font-size: calc(20px + 10 * (100vw / 1920));
            font-weight: 600;
            margin-bottom: 30px;
        }
    }
}

.review-modal-inner-enter-active,
.review-modal-inner-leave-active {
  transition: .5s ease;
}

.review-modal-inner-enter-from,
.review-modal-inner-leave-to {
  opacity: 0;
  transform: scale(1.1);
}

.review-modal-enter-active,
.review-modal-leave-active {
    transition: .4s ease;
}

.review-modal-enter-from,
.review-modal-leave-to {
    opacity: 0;
}

@media (min-width: 1920px) {
    .review__modal-title {
        font-size: 30px !important;
    }
}

@media (max-width: 992px) {
    .review__modal-form {
        padding-left: 25px !important;
        align-items: center;
        text-align: center;
    }

    .review__form-rate.modal {
        align-items: center;        
        margin: 0 auto;
    }
}

@media (max-width: 768px) {
    .reviews__list-item {
        flex-direction: column;
    }

    .review__form {
        flex-direction: column;
        align-items: center;

        &-rate {
            align-items: center;
            text-align: center;
        }
    }
    
    
}

</style>