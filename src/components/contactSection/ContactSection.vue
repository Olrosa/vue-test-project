<template>
  <section class="contacts">
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
        title: String
    },
    data() {
        return {
            fields: [
                {
                    label: 'First Name *',
                    placeholder: 'Enter your First name',
                    type: 'name',
                    id: 1
                },
                {
                    label: 'Last Name *',
                    placeholder: 'Enter your Last name',
                    type: 'name',
                    id: 2
                },
                {
                    label: 'Company *',
                    placeholder: 'Company *',
                    type: 'short-text',
                    id: 3
                },
                {
                    label: 'Email *',
                    placeholder: 'Enter Your Email',
                    type: 'email',
                    id: 4
                },
                {
                    label: 'Job Title *',
                    placeholder: 'Enter job title',
                    type: 'short-text',
                    id: 5
                },
                {
                    label: 'Country',
                    placeholder: 'Enter Your Country',
                    type: 'short-text',
                    id: 6
                },
                {
                    label: 'State *',
                    placeholder: 'Enter your State',
                    type: 'short-text',
                    id: 7
                },
                {
                    label: 'Zip code *',
                    placeholder: 'Enter Your Zip Code',
                    type: 'short-text',
                    id: 8
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