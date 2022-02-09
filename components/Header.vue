<template>
  <header class="header">
    <div class="container">
      <div class="header-mainBlock">
        <div class="header-logoBlock">
          <nuxt-logo/>
          <div class="header-logoBlock_title">orthodox.digital</div>
        </div>
        <div
          class="header-logoBlock_subtitle"
          :class="{
            'header-logoBlock_subtitle-En': lang === 'en',
            'header-logoBlock_subtitle-Ru': lang === 'ru',
        }"
        >
        <p>{{ $t('headerSubtitleStart') }}</p>
          <p>{{ $t('headerSubtitleEnd') }}</p>
        </div>
      </div>

    </div>

  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    lang: {
      type: String,
      required: true
    }
  },
  // data(){
  //   return{
  //     lang : ''
  //   }
  // },
  // created() {
  //   this.lang = this.$i18n.locale
  // },
  watch:{
    lang(val){
      console.log(val, 'ddddddd')
    return this.lang
    }
  }
}
</script>

<style scoped>


</style>
