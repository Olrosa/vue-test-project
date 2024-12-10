<template>
  <div class="applications" :id="anchor">
    <div class="wrapper">
        <h2 class="applications__title">
            {{ title }}
        </h2>
        <div class="applications__offer">
            <ApplicationCard 
                v-for="item in apps" 
                :key="item.id" 
                v-bind="item"/>
        </div>
    </div>
  </div>
</template>

<script>
import ApplicationCard from '../applicationCard/ApplicationCard.vue'

import appImg1 from '../../assets/img/apps/app_1.png'
import appImg2 from '../../assets/img/apps/app_2.png'
import appImg3 from '../../assets/img/apps/app_3.png'
import appImg4 from '../../assets/img/apps/app_4.png'
import appImg5 from '../../assets/img/apps/app_5.png'
import appImg6 from '../../assets/img/apps/app_6.png'
import appImg7 from '../../assets/img/apps/app_7.png'
import appImg8 from '../../assets/img/apps/app_8.png'

export default {
    props: {
        title: String,
        anchor: String
    },
    data() {
        return {
            apps: [
                {
                    title: 'App 1',
                    img: appImg1,
                    id: 1
                },
                {
                    title: 'App 2',
                    img: appImg2,
                    id: 2
                },
                {
                    title: 'App 3',
                    img: appImg3,
                    id: 3
                },
                {
                    title: 'App 4',
                    img: appImg4,
                    id: 4
                },
                {
                    title: 'App 5',
                    img: appImg5,
                    id: 5
                },
                {
                    title: 'App 6',
                    img: appImg6,
                    id: 6
                },
                {
                    title: 'App 7',
                    img: appImg7,
                    id: 7
                },
                {
                    title: 'App 8',
                    img: appImg8,
                    id: 8
                }
            ]
        }
    },
    components: {
        ApplicationCard
    }
}
</script>

<style scoped lang="scss">
    .applications {
        padding: 50px 0;
        &__title {
            text-align: center;
        }
        &__offer {
            margin-top: 45px;
            display: flex;
            flex-wrap: wrap;
            gap: 90px;
            justify-content: space-between;
        }
    }
</style>