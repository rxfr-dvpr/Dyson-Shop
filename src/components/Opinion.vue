<template>
  <section class="opinion__section">
    <div class="container">
        <div class="row">
            <div class="opinion__descr">
                <h2 class="opinion__descr-title all-title">{{ store.title }}</h2>
                <p class="opinion__descr-txt all-txt">{{ store.txt }}</p>
            </div>

            <img :src="store.img" alt="" class="opinion-img">
        </div>
    </div>
  </section>
</template>

<script>
import { opinionStore } from "@/stores/opinionStore.js";

export default {
    name: 'Opinion Section',
    data() {
        return {
            store: opinionStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.opinion__section {
    width: 100%;
    background: #F8F8F8;
    padding-top: 85px;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        flex-wrap: unset !important;
    }

    .opinion__descr {
        max-width: 800px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
    }

    .opinion-img {
        max-width: 500px;
        width: 100%;
    }
}

@media (max-width: 1350px) {
    .opinion-img {
        max-width: 400px !important;
    }
}

@media (max-width: 992px) {
    .row {
        flex-direction: column;
    }

    .opinion__descr {
        max-width: 700px !important;
        align-items: center;
        text-align: center;
    }
}

</style>