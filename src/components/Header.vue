<template>
  <header class="header">
    <div class="container">
        <div class="row">

            <div class="header__descr">
                <h1 class="header__descr-title all-title">{{ store.title }}</h1>
                <p class="header__descr-txt">{{ store.txt }}</p>

                <button class="header__descr-btn all-btn">{{ store.btnTxt }}</button>
            </div>

            <img :src="store.img" alt="" class="header-img">
        </div>
    </div>
  </header>
</template>

<script>
import { headerStore } from "@/stores/headerStore.js";

export default {
    name: 'Header',
    data() {
        return {
            store: headerStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    background: lightgray;
    padding-top: 20px;

    .row {
        justify-content: space-between;
        align-items: center;
        flex-wrap: unset !important;
        row-gap: 30px;
    }

    .header__descr {
        max-width: 550px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;

        &-txt {
            font-size: calc(12px + 14 * (100vw / 1920));

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    .header-img {
        max-width: 500px;
        width: 100%;
        pointer-events: none;
    }
}

@media (min-width: 1920px) {
    .header__descr-txt {
        font-size: 26px !important;
    }
}

@media (max-width: 1110px) {

    .row {
        align-items: flex-start !important;
    }

    .header-img {
        max-width: 400px !important;
    }
}

@media (max-width: 768px) {
    .header {
        padding-top: 50px;

        .row {
            flex-direction: column;
            align-items: center !important;
        }
    
        &__descr {
            align-items: center;
            text-align: center;
            row-gap: 15px !important;
        }
    
        &-img {
            max-width: 400px !important;
        }
    }
}



</style>