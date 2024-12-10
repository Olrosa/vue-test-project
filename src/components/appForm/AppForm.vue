<template>
  <form class="form" @submit="handleSubmit">
    <div class="form__offer">
        <FormField 
            v-for="item in fields" 
            :key="item.id" 
            v-bind="item"/>
    </div>
    <AppButton
        type="button"
        @action="handleSubmit"
        class="form__button">Submit</AppButton>
  </form>
</template>

<script>
import AppButton from '../ui/appButton/AppButton.vue';

export default {
    props: {
        fields: Array
    },
    methods: {
        handleSubmit() {
            console.log('send log')
        }
    },
    components: {
        AppButton
    }
}
</script>

<style scoped lang="scss">
    .form {
        &__offer {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 10px;
        }
        &__button {
            display: block;
            margin: 0 auto;
            margin-top: 20px;
        }
    }
</style>