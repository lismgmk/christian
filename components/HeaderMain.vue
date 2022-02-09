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
            'header-logoBlock_subtitle-Es': lang === 'es',
        }"
        >
        <p>{{ $t('headerSubtitleStart') }} &nbsp</p>
          <p>{{ $t('headerSubtitleEnd') }}</p>
        </div>
      </div>

    </div>

  </header>
</template>

<script>
import NuxtLogo from "./NuxtLogo";

export default {
  name: "HeaderMain",
  components: {
   NuxtLogo
  },
  props: {
    lang: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>


</style>
