<!-- Please remove this file from your project -->
<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header-mainBlock">
          <div class="header-logoBlock">
            <nuxt-logo/>
            <div class="header-logoBlock_title">orthodox.digital</div>
          </div>
          <div class="header-logoBlock_subtitle">Follow God in the digital world</div>
        </div>

      </div>

    </header>
    <div class="titleNote">
      <div class="container">
        <div class="titleNote-mainBlock">
          <cross-icon class="titleNote-cross_icon"/>
          <div class="titleNote-entriesBlock">
            <div>"Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be
              yours."
            </div>
            <p>— Mark 11:24</p>
          </div>

        </div>

      </div>
    </div>
    <div>
      <div>
        <ul>
          <li>1. Explore the orthodox world</li>
          <li>2. Stay tuned with your favorite monasteries</li>
          <li>3. Order services and light up candles remotely</li>
        </ul>
        <div>
          <img src="imgAppStore.png"/>
          <img src="imgGooglePlay.png"/>
        </div>
      </div>
      <img class="img-mobileScreens" src="imgMobileScreens.png"/>

    </div>
  </div>
</template>
<style>
.titleNote {
  background: linear-gradient(260.17deg, rgba(0, 187, 255, 0.63) 0%, #00BBFF 100%);
}

.header{

}
.container{
  width: 90%;
  margin: auto;
  display: block;
}
.header-mainBlock{
  font-size: 14px;
  color: #12C0FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 243px;
}
.header-logoBlock{
  display: flex;
  align-items: center;
}
.header-logoBlock_title{
  padding-left: 10px;
  font-weight: 400;
}
.header-logoBlock_subtitle{
  padding-top: 30px;
  font-weight: bold;
  font-size: 64px;
  line-height: 120%;
  letter-spacing: -0.045em;
  color: #00BBFF;
}

.titleNote{

  background: linear-gradient(260.17deg, rgba(0, 187, 255, 0.63) 0%, #00BBFF 100%);
  color: white;
}

.titleNote-cross_icon{
  color: white;
}
.titleNote-mainBlock{
  height: 458px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.img-mobileScreens {
}
</style>
<script>

export default {
  name: 'NuxtTutorial'
}
</script>
