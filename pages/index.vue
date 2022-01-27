<template>
  <div>
    <Header/>
    <TitleNote/>
    <Content/>
  </div>
</template>

<script>

export default {
  name: 'NuxtTutorial',

  mounted() {
    if (process.browser){
      this.$i18n.locale = window.navigator.language
      // this.$router.push({ path:  this.switchLocalePath(this.$i18n.locale.slice(0,2))})
    }
  },

}
</script>
