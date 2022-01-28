<template>
  <div>
    <Header/>
    <TitleNote/>
    <Content/>
  </div>
</template>

<script>
import Header from '/components/Header.vue';
import TitleNote from '/components/TitleNote.vue';
import Content from '/components/Content.vue';

export default {

  name: 'NuxtTutorial',
  components: {
    Header,
    TitleNote,
    Content
  },
  mounted() {
    if (process.browser){
      console.log(this.$i18n.locale, 'locale')
      console.log(window.navigator.language, 'win')
      this.$i18n.locale = window.navigator.language
      // this.$router.push({ path:  this.switchLocalePath(this.$i18n.locale.slice(0,2))})
    }
  },

}
</script>
