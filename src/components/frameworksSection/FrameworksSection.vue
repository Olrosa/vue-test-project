<template>
  <section class="frameworks" :id="anchor">
    <div class="wrapper">
        <h2 class="frameworks__title">
            Frameworks
        </h2>
        <div class="frameworks__offer">
            <FrameworkCard 
                v-for="item in frameworks" 
                :key="item.id" 
                v-bind="item"/>
        </div>
    </div>
  </section>
</template>

<script>
import FrameworkCard from '../frameworkCard/FrameworkCard.vue';

import vueBg from '../../assets/img/vue_bg.png'
import reactBg from '../../assets/img/react_bg.png'
import angularBg from '../../assets/img/angular_bg.png'

export default {
    props: {
        anchor: {
            type: String,
            default: '#frameworks'
        },
        title: {
            type: String,
            default: 'Frameworks'
        }
    },
    data() {
        return {
            frameworks: [
                {
                    title: 'Vue js',
                    description: 'Vue.js is an open source JavaScript framework for creating user interfaces. It is easily integrated into projects using other JavaScript libraries. It can function as a web framework for developing single-page applications in a reactive style.',
                    link: '#',
                    img: vueBg,
                    id: 1
                },
                {
                    title: 'React js',
                    description: 'React is an open source JavaScript library for developing user interfaces. Instagram Facebook, React is developed and supported by a community of individual developers and corporations. React can be used to develop single-page and mobile applications.',
                    link: '#',
                    img: reactBg,
                    id: 2
                },
                {
                    title: 'Angular js',
                    description: 'AngularJS is an open source JavaScript framework. Designed for the development of single-page applications. Its goal is to expand browser applications based on the MVC template, as well as simplify testing and development.',
                    link: '#',
                    img: angularBg,
                    id: 3
                }
            ],
            
        }
    },  
    components: { FrameworkCard }

}
</script>

<style scoped lang="scss">
    .frameworks {
        padding: 44px 0 30px 0;
        &__title {
            text-align: center;
        }
        &__offer {
            margin-top: 40px;
            display: flex;
            flex-direction: column;
            gap: 45px;
        }
    }
   
</style>