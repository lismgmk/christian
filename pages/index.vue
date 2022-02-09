<template>
  <div>
    <Header  :lang="lang"/>
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
  data(){
    return{
      lang : ''
    }
  },
  mounted() {
    if (process.browser){
      this.$i18n.locale = window.navigator.language
     this.lang = window.navigator.language.slice(0,2)
    }
  },

}
</script>
