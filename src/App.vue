<template>

  <HeaderComponent/>
  <MainSection
    title="Welcome to Test Page"
    subtitle="Front-end developer"
    :img="heroBg"/>

</template>

<script>
import HeaderComponent from './components/headerComponent/HeaderComponent.vue'
import MainSection from './components/mainSection/MainSection.vue'

import heroBg from './assets/img/hero_bg.png'

export default {
  data() {
    return {
      sections: [
          {title: 'Home', archor: '#home'},
          {title: 'About us', archor: '#about'},
          {title: 'Frameworks', archor: '#frameworks'},
          {title: 'Applications', archor: '#applications'},
          {title: 'Contact us', archor: '#contacts'}
      ],
      heroBg
    }
  },
  components: {
    HeaderComponent, MainSection
  },
  provide() {
    return {
      sections: this.sections,
    };
  },
}
</script>