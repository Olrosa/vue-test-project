<template>
  <div class="header">
    <div class="wrapper">
        <div class="header__offer">
            <a href="/" class="header__logo">
                <img :src="logo" alt="Success Craft" class="header__logo-img">
            </a>
            <NavMenu/>
        </div>
    </div>
  </div>
</template>

<script>
import NavMenu from '../navMenu/NavMenu.vue';
import logo from '@/assets/icons/logo.png';
export default {
    data() {
        return {
            logo
        }
    },
    components: {
        NavMenu
    }
}
</script>

<style scoped lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 21px 0;
        background: #FFF;
        box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
        z-index: 2;
        &__offer {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__logo {
            &-img {
                width: 200px;
                height: auto;
                object-fit: contain;
            }
        }
    }
</style>