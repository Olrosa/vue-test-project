<template>
  <section class="hero" :style="{ backgroundImage: `url(${img})` }" :id="anchor">
    <div class="wrapper">
        <div class="hero__offer">
            <h1 class="hero__title">
                {{ title }}
            </h1>
            <span class="hero__subtitle">
                {{ subtitle }}
            </span>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Welcome'
        },
        subtitle: {
            type: String,
            default: 'Front-end developer'
        },
        img: {
            type: String,
            required: true, 
        },
        anchor: {
            type: String,
             default: '#home'
        }
    }
}
</script>

<style scoped lang="scss">
    .hero {
        position: relative;
        min-height: 800px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        z-index: 1;
        &__offer {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &__title {
            text-align: center;
        }
        &__subtitle {
            color: #fff;
            text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
            font-size: 36px;
        }
    }
    @media (max-width: 768px) {
        .hero {
            &__offer {
                gap: 30px;
            }
            &__subtitle {
                font-size: 24px;
            }
        }
    }
    @media (max-width: 576px) {
        .hero {
            &__offer {
                width: 100%;
            }
            &__subtitle {
                font-size: 24px;
            }
        }
    }
</style>