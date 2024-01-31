<template>
    <div class="cart-popup" :class="{'opened': opened}">
        <p class="cart-popup-txt all-txt">
            {{ txt }} 
            <span class="cart-popup-icon" @click="opened = false"><i class="far fa-check-circle"></i></span>
        </p>
    </div>
</template>

<script>

export default {
    name: 'Popover',
    props: {
        txt: {
            type: String,
            default: 'Default Popover Text',
            required: true
        },
        opened: {
            type: Boolean,
            default: false,
            required: true
        }
    }
}

</script>

<style lang="scss" scoped>

.cart-popup {
    max-width: 500px;
    width: max-content;
    padding: 10px 15px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: var(--main-white);
    border-radius: 8px;
    border: 1px solid  #DEE2E6;
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.08), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
    z-index: 2023;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: .4s;

    &-txt {
        font-weight: 600;
        display: flex;
        align-items: center;
        color: #54595E99;
        gap: 8px;
    }

    &-icon {
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;

        i {
            color: var(--main-pink);        
        }
    }

    &.opened {
        top: 90px;
        opacity: 1;
    }
}

</style>