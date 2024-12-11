<template>
  <form class="form" @submit.prevent="handleSubmit" novalidate>
    <div class="form__offer">
        <FormField 
            v-for="item in fields" 
            :key="item.id" 
            v-bind="item"
            ref="fields"/>
    </div>
    <AppButton
        type="button"
        class="form__button">Submit</AppButton>
  </form>
  <AppModal 
    :isModalOpen="isModalOpen" 
    @close="closeModal">
    Data sent successfully!
  </AppModal>
</template>

<script>
import AppButton from '../ui/appButton/AppButton.vue'

export default {
    props: {
        fields: Array
    },
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        formIsValid() {
            let isValid = true;
            this.$refs.fields.forEach((field) => {
                if (!field.validate()) {
                    isValid = false;
                }
            });
            return isValid;
        },
        handleSubmit() {
            if (this.formIsValid()) {
                this.$refs.fields.forEach((field) => {
                    field.input && console.log(`field ${field.label}: ${field.input}`)
                    field.clearInput()
                    this.isModalOpen = true
                    document.body.style.overflow = 'hidden'
                })
            }
        },
        closeModal() {
            this.isModalOpen = false
            document.body.style.overflow = ''
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