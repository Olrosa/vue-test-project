<template>
  <section class="contacts" :id="anchor">
    <div class="wrapper">
        <h2 class="contacts__title">
            {{ title  }}
        </h2>
        <AppForm :fields="fields"/>
    </div>
  </section>
</template>

<script>
import AppForm from '../appForm/AppForm.vue';

export default {
    props: {
        title: String,
        anchor: String
    },
    data() {
        return {
            fields: [
                {
                    label: 'First Name *',
                    placeholder: 'Enter your First name',
                    inputType: 'name',
                    name: 'firstName',
                    required: true,
                    id: 'firstName'
                },
                {
                    label: 'Last Name *',
                    placeholder: 'Enter your Last name',
                    inputType: 'name',
                    name: 'firstName',
                    required: true,
                    id: 'lastName'
                },
                {
                    label: 'Company *',
                    placeholder: 'Company *',
                    inputType: 'short-text',
                    name: 'company',
                    required: true,
                    id: 'company'
                },
                {
                    label: 'Email *',
                    placeholder: 'Enter Your Email',
                    inputType: 'email',
                    name: 'email',
                    required: true,
                    id: 'email'
                },
                {
                    label: 'Job Title *',
                    placeholder: 'Enter job title',
                    inputType: 'short-text',
                    name: 'name',
                    required: true,
                    id: 'job'
                },
                {
                    label: 'Country',
                    placeholder: 'Enter Your Country',
                    inputType: 'short-text',
                    name: 'country',
                    required: false,
                    id: 'country'
                },
                {
                    label: 'State *',
                    placeholder: 'Enter your State',
                    inputType: 'short-text',
                    name: 'state',
                    required: true,
                    id: 'state'
                },
                {
                    label: 'Zip code *',
                    placeholder: 'Enter Your Zip Code',
                    inputType: 'short-text',
                    name: 'zipCode',
                    required: true,
                    id: 'zipCode'
                }
            ]
        }
    },
    components: {
        AppForm
    }
}
</script>

<style scoped lang="scss">
    .contacts {
        padding: 44px 0 60px;
        background: #fff;
        &__title {
            text-align: center;
            margin-bottom: 40px;
        }
    }
</style>