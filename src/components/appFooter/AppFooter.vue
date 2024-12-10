<template>
  <footer class="footer">
    <span class="footer__descr">
        <slot/>
    </span>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .footer {
        padding: 40px 0 50px 0;
        background: #3D3D3D;
        &__descr {
            display: block;
            color: #fff;
            text-align: center;
        }
    }
</style>