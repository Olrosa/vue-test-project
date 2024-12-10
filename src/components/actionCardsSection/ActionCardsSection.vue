<template>
  <div class="cards">
    <div class="wrapper">
        <div class="cards__offer">
            <ActionCard 
                v-for="item in cards" 
                :key="item.id" 
                v-bind="item"/>
        </div>
    </div>
  </div>
</template>

<script>
import ActionCard from '../actionCard/ActionCard.vue'

import cardOneImg from '../../assets/img/card_1.png'
import cardTwoImg from '../../assets/img/card_2.png'

export default {
    data() {
        return {
            cards: [
                {
                    title: 'Setup a Meeting',
                    description: 'Fill out our contact form and have someone get back to you within 24 hours.',
                    img: cardOneImg,
                    id: 1
                },
                {
                    title: 'Ask a Question',
                    description: 'Have a question? Just fill out our contact us form and we will get back to you.',
                    img: cardTwoImg,
                    id: 2
                }
            ]
        }
    },
    components: {
        ActionCard
    }
}
</script>

<style scoped lang="scss">
    .cards {
        margin-top: 20px;
        background: #FFF;
        &__offer {
            display: flex;
            gap: 20px;
        }
    }
</style>