<template>
  <article class="card">
    <div class="card__offer">
        <img class="card__img" :src="img"/>
        <div class="card__about">
            <div class="card__descr-group">
                <h3 class="card__title">
                    {{ title }}
                </h3>
                <p class="card__descr">
                   {{ description }}
                </p>
            </div>
            <div class="card__buttons">
                <AppButton type="button" @action="handleReadMore">Read more</AppButton>
                <AppButton type="link" :href="link" color="button-nobg">Webinar</AppButton>
            </div>
        </div>
    </div>
  </article>
</template>

<script>
import AppButton from '../ui/appButton/AppButton.vue';
export default {
    props: {
        title: {
            type: String,
            default: 'About'
        },
        description: {
            type: String
        },
        img: {
            type: String
        },
        link: {
            type: String
        }
    },
    methods: {
        handleReadMore() {
            console.log('btn log')
        }
    },
    components: { AppButton }
}
</script>

<style scoped lang="scss">
    .card {
        border-radius: 5px;
        background: #FFF;
        &:nth-child(2n) {
            .card {
                &__img {
                    order: 2;
                }
                &__about {
                    order: 1;
                }
            }
        }
        &__offer {
            display: flex;
            justify-content: space-between;
            gap: 70px;
        }
        &__img {
            flex: 4;
            height: 100%;
            object-fit: cover;
            object-position: center;
            order: 1;
            
        }
        &__about {
            padding: 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex: 6;
            order: 2;
        }
        &__descr-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        &__descr {
            color: #808080;
            line-height: 26px;
            max-width: 600px;
        }
        &__buttons {
            display: flex;
            gap: 20px;
        }
    }
</style>