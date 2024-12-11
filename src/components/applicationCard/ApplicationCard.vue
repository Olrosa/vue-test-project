<template>
  <div class="card">
    <img :src="img" :alt="title" class="card__img">
    <span class="card__title">
        {{ title }}
    </span>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        img: String
    }
}
</script>

<style scoped lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        width: calc(25% - 90px);
        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
        &__title {
            display: block;
            padding: 5px 0;
            width: 100%;
            text-align: center;
            color: #FFF;
            background: #3D3D3D;
        }
    }
    @media (max-width: 992px) {
        .card {
            width: calc(50% - 20px);
        }
    }
</style>