<template>
  <div class="content">
    <div class="container">
      <div class="content-mainBlock">
        <div class="content-mainBlock_list">
          <ul class="content-listBlock">
            <li>{{$t('contentFirst')}}</li>
            <li>{{$t('contentSecond')}}</li>
            <li>{{$t('contentThird')}}</li>
          </ul>
          <div class="content-buttonBlock">
            <img class="imgAppStore" src="imgAppStore.png"/>
            <img class="imgGooglePlay" src="imgGooglePlay.png"/>
          </div>
        </div>

        <img class="img-mobileScreens" src="imgMobileScreens.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>





</style>
