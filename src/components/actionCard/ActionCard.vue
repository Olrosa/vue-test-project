<template>
    <div class="card">
        <img :src="img" :alt="title" class="card__img">
        <div class="card__offer">
            <h3 class="card__title">
                {{ title }}
            </h3>
            <p class="card__descr">
                {{ description }}
            </p>
            <AppButton type="button" @action="handleAction">
                Schedule a Meeting
            </AppButton>
        </div>
    </div>
</template>

<script>
import AppButton from '../ui/appButton/AppButton.vue'

export default {
    props: {
        title: String,
        description: String,
        img: String

    },
    methods: {
        handleAction() {
            console.log('action log')
        }
    },
    components: {
        AppButton
    }
}
</script>

<style scoped lang="scss">
    .card {
        display: flex;
        gap: 20px;
        flex: 1;
        &__img {
            flex: 6;
            height: 220px;
            object-fit: cover;
            object-position: center;
        }
        &__offer {
            padding: 25px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 10;
            flex: 4;
        }
        &__descr {
            color: #808080;
            line-height: 26px;
        }
    }
</style>