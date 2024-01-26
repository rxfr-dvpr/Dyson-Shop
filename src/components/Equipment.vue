<template>
  <section class="equipment__section all-padding">
    <div class="container">
        <div class="row">
            <h2 class="equipment-title all-title">{{ store.title }}</h2>

            <div class="main-swiper">
                <swiper class="equipment-swiper" 
                :navigation="{ nextEl: '.equipment-control.right', prevEl: '.equipment-control.left'}" 
                :modules="modules" :slidesPerView="4" :spaceBetween="20">
                    <swiper-slide class="equipment-swiper-slide" v-for="(slide, idx) in store.slider" :key="idx">
                        <img :src="slide.img" alt="" class="slide-img">
                        <p class="slide-name">{{ slide.name }}</p>
                        <p class="slide-txt all-txt">{{ slide.txt }}</p>
                    </swiper-slide>
                </swiper>

                <div class="equipment-controls">
                    <span class="equipment-control left"><i class="fal fa-arrow-left"></i></span>
                    <span class="equipment-control right"><i class="fal fa-arrow-right"></i></span>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { equipStore } from "@/stores/equipStore.js";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper/modules';

export default {
    name: 'Equipment Section',
    components: {
      Swiper,
      SwiperSlide  
    },
    data() {
        return {
            store: equipStore(),
            modules: [Navigation]
        }
    }
}

</script>

<style lang="scss" scoped>

.equipment__section {
    width: 100%;
    background: #F8F8F8;

    .row {
        flex-direction: column;
        row-gap: 60px;
    }

    .main-swiper {
        width: 100%;
        position: relative;
    }

    .equipment-swiper {
        width: 100%;

        &-slide {
            width: 100%;
            height: auto;
            background: var(--main-white);
            border-radius: 3px;
            overflow: hidden;
            padding: 30px 35px;
            display: flex;
            flex-direction: column;
            row-gap: 15px;

            .slide-img {
                max-width: 245px;
                width: 100%;
            }

            .slide-name {
                font-size: 20px;
                font-weight: 600;
            }

            .slide-txt {
                font-weight: 300;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
    }

    .equipment-controls {
        width: 110%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 45%;
        left: 50%;
        z-index: 5;
        transform: translate(-50%, 50%);

        .equipment-control {
            cursor: pointer;
            border-radius: 3px;
            border: 1px solid var(--main-black);
            font-size: 20px;
            padding: 5px 8px;
            background: var(--main-white);
        }
    }
}

</style>