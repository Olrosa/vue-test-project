<template>
  <nav class="nav">
    <ul class="nav__list">
        <li class="nav__list-item" v-for="item in sections" :key="item.title">
            <a :href="item.archor" class="nav__list-link">
                {{ item.title }}
            </a>
        </li>
    </ul>
  </nav>
</template>

<script>
export default {
    inject: ['sections']
}
</script>

<style scoped lang="scss">
    .nav {
        &__list {
            display: flex;
            align-items: center;    
            gap: 20px;
            list-style-type: none;
            &-link {
                font-family: "Roboto", sans-serif;
                font-size: 18px;
                text-transform: uppercase;
                text-decoration: none;
                transition: .3s all;
                &:focus, &:hover {
                    color: #71A3FF;
                }
            }
        }
    }
</style>