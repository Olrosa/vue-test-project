<template>
  <section class="about" :style="{ backgroundImage: `url(${img})` }" :id="anchor">
    <div class="wrapper">
        <div class="about__offer">
            <div class="about__block">
                <h3 class="about__title">
                    {{ title }}
                </h3>
                <p class="about__descr">
                    <slot/>
                </p>
                <div class="about__buttons">
                    <AppButton type="button" @action="handleReadMore">
                        Read more
                    </AppButton>
                    <AppButton type="link" href="#contacts" class="button-nobg">
                        Contact us
                    </AppButton>
                </div>
            </div>
            <iframe class="about__frame" :src="frame">

            </iframe>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'About'
        },
        frame: {
            type: String,
            required: true
        },
        bgImg: {
            type: String
        },
        anchor: {
            type: String,
            default: '#about'
        }
    },
    methods: {
        handleReadMore() {
            console.log('btn log')
        }
    }
}
</script>

<style scoped lang="scss">
    .about {
        padding: 90px 0;
        &__offer {
            display: flex;
            gap: 20px;
            align-content: center;
        }
        &__block {
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            flex: 6;
        }
        &__frame {
            flex: 4;
            height: 300px;
            border: none;
        }
        &__descr {
            color: #808080;
            font-size: 16px;
            line-height: 26px;
        }
        &__buttons {
            margin-top: 15px;
            display: flex;
            gap: 20px;
        }
    }
</style>