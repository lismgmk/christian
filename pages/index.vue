<template>
  <div>
    <header-main  :lang="lang"/>
    <title-note/>
    <content-main/>
  </div>
</template>

<script>
import TitleNote from '/components/TitleNote.vue';
import HeaderMain from "../components/HeaderMain";
import ContentMain from "../components/ContentMain";

export default {

  name: 'NuxtTutorial',
  components: {
    HeaderMain,
    TitleNote,
    ContentMain
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
