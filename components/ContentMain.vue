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
            <img alt="" class="imgAppStore" src="~/static/imgAppStore.png"/>
            <img alt="" class="imgGooglePlay" src="~/static/imgGooglePlay.png"/>
          </div>
        </div>

        <img alt="" class="img-mobileScreens" src="~/static/imgMobileScreens.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentMain"
}
</script>

<style scoped>





</style>
