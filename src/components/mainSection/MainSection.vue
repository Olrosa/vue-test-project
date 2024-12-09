<template>
  <section class="hero" :style="{ backgroundImage: `url(${img})` }">
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
</style>