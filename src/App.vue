<template>

  <HeaderComponent :logo="logo"/>
  <MainSection
    title="Welcome to Test Page"
    subtitle="Front-end developer"
    :img="heroBg"
    anchor="home"/>
  <AboutSection 
    title="About us" 
    frame="https://www.youtube.com/embed/Upex8hM6wRs?si=CUFFvrRf0bvzd2rg" 
    anchor="about" 
    :bg-img="aboutBg">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.
  </AboutSection>
  <FrameworksSection anchor="frameworks"/>
  <ActionCardsSection/>
  <ApplicationsSection 
    anchor="applications"
    title="Applications"/>
  <ContactSection 
    title="Contact Us"
    anchor="contacts"/>
  <AppFooter>
    ©2015-2022 Success Craft
  </AppFooter>
</template>

<script>
import HeaderComponent from './components/headerComponent/HeaderComponent.vue'
import MainSection from './components/mainSection/MainSection.vue'
import AboutSection from './components/aboutSection/AboutSection.vue'
import FrameworksSection from './components/frameworksSection/FrameworksSection.vue'
import ActionCardsSection from './components/actionCardsSection/ActionCardsSection.vue'
import ApplicationsSection from './components/applicationsSection/ApplicationsSection.vue'
import AppFooter from './components/appFooter/AppFooter.vue'
import ContactSection from './components/contactSection/ContactSection.vue'

import logo from './assets/icons/logo.png'
import heroBg from './assets/img/hero_bg.png'
import aboutBg from './assets/img/about_bg.png'

export default {
  data() {
    return {
      logo,
      sections: [
          {title: 'Home', archor: '#home'},
          {title: 'About us', archor: '#about'},
          {title: 'Frameworks', archor: '#frameworks'},
          {title: 'Applications', archor: '#applications'},
          {title: 'Contact us', archor: '#contacts'}
      ],
      heroBg,
      aboutBg
    }
  },
  components: {
    HeaderComponent, MainSection, AboutSection, FrameworksSection, ActionCardsSection, ApplicationsSection, AppFooter, ContactSection
  },
  provide() {
    return {
      sections: this.sections,
    };
  },
}
</script>