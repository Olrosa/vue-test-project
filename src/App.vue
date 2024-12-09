<template>
  <HeaderComponent/>
</template>

<script>
import HeaderComponent from './components/headerComponent/HeaderComponent.vue';

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
    }
  },
  components: {
    HeaderComponent
  },
  provide() {
    return {
      sections: this.sections,
    };
  },
}
</script>