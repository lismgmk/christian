<template>
  <header class="header">
    <div class="container">
      <div class="header-mainBlock">
        <div class="header-logoBlock">
          <nuxt-logo/>
          <div class="header-logoBlock_title">orthodox.digital</div>
        </div>
        <div class="header-logoBlock_subtitle"> {{ $t('headerSubtitle') }}</div>
      </div>

    </div>

  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>


</style>
