<!-- Please remove this file from your project -->
<i18n>
{
  "en":{
    "hello":"Hello World"
  },
  "ru":{
    "hello":"哈囉 世界"
  }
}
</i18n>
<template>
  <div>

    <Header/>
    {{$i18n.locale}}
    {{ $t('hello') }}
    <TitleNote/>
    <Content/>
  </div>


</template>
<style>


.container {
  width: 80%;
  margin: auto;
  display: block;
}


</style>
<script>

export default {
  name: 'NuxtTutorial',
  // asyncData({ req }) {
  //   let browserLang = req.headers["accept-language"]
  //     .split(",")[0]
  //     .toLocaleLowerCase()
  //     .substring(0, 2);
  //   return { lang: browserLang };
  // },
  // data() {
  //   let lang = "zh";
  //   this.$i18n.locale = lang;
  //   return { locale: this.locale };
  // },
  // watch: {
  //   locale(val) {
  //     console.log(val)
  //     this.$i18n.locale = 'zh';
  //   }
  // },
  created() {
    console.log(this.$i18n.locale)

    // this.selectedValue = this.$i18n.locale;
    if (process.browser){
      console.log(window.navigator.language, 'user')
      this.$i18n.locale = window.navigator.language
    }
  },

}
</script>
