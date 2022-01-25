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
            <div class="titleNote-enentriesBlock_text">"Therefore I tell you, whatever you ask for in prayer, believe
              that you have received it, and it will be
              yours."
            </div>
            <p>— Mark 11:24</p>
          </div>
        </div>

      </div>



    </div>
<div class="content2">

  <div class="content">
    <div class="container">
      <div class="content-mainBlock">
        <ul class="content-listBlock">
          <li>1. Explore the orthodox world</li>
          <li>2. Stay tuned with your favorite monasteries</li>
          <li>3. Order services and light up candles remotely</li>
        </ul>
        <div class="content-buttonBlock">
          <img src="imgAppStore.png"/>
          <img src="imgGooglePlay.png"/>
        </div>

      </div>
      <img class="img-mobileScreens" src="imgMobileScreens.png"/>
    </div>
</div>



    </div>

  </div>
</template>
<style>
.titleNote {
  background: linear-gradient(260.17deg, rgba(0, 187, 255, 0.63) 0%, #00BBFF 100%);
}

.header {
  background: #F1FCFF;
}

.container {
  width: 80%;
  margin: auto;
  display: block;
}

.header-mainBlock {
  font-size: 14px;
  color: #12C0FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 243px;
}

.header-logoBlock {
  display: flex;
  align-items: center;
}

.header-logoBlock_title {
  padding-left: 10px;
  font-weight: 400;
}

.header-logoBlock_subtitle {
  padding-top: 30px;
  font-weight: bold;
  font-size: 64px;
  line-height: 120%;
  letter-spacing: -0.045em;
  color: #00BBFF;
}

.titleNote {
  background: linear-gradient(260.17deg, rgba(0, 187, 255, 0.63) 0%, #00BBFF 100%);
  color: white;
}

.titleNote-cross_icon {
  color: white;
}

.titleNote-mainBlock {
  font-family: Lato, SansSerif;;
  height: 458px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.titleNote-enentriesBlock_text {
  width: 730px;
  font-weight: bold;
  font-size: 36px;
  line-height: 135%;
  padding-bottom: 30px;
}

.titleNote-enentriesBlock_text p {
  font-size: 22px;
  line-height: 180%;
}

.content{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #E5E5E5;
  min-height:calc(100vh);;
  position: relative;
}
.content-mainBlock{

}
.content-listBlock{



  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;

  color: #112A32;


}
.content-listBlock ul li{
  padding-bottom: 28px;
}

.content-buttonBlock{
margin-top: 32px;
  display: flex;
}
.content-buttonBlock img{
 width: 168px;
  height: 50px;
  margin-right: 20px;
}



.img-mobileScreens {
  width: 953px;
  height: 850px;
  position: absolute;
  z-index: 10;
  bottom: 14px;
  left: 540px;
  top: -150px
}
</style>
<script>

export default {
  name: 'NuxtTutorial'
}
</script>
