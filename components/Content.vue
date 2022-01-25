<template>
  <div class="content">
    <div class="container">

      <div class="content-mainBlock">

        <div class="content-mainBlock_list">
          <ul class="content-listBlock">
            <li>1. Explore the orthodox world</li>
            <li>2. Stay tuned with your favorite monasteries</li>
            <li>3. Order services and light up candles remotely</li>
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


.content {
  width: 100%;
  background: #E5E5E5;
  position: relative;
}



.content-mainBlock {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
}

.content-buttonBlock {
  padding-top: 32px;
  padding-bottom: 250px;
}

.content-buttonBlock img {
  max-width: 168px;
  max-height: 50px;

}

.imgAppStore {
  margin-right: 20px;
}

.content-listBlock {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  color: #112A32;
  padding-top: 190px;
}

.content-listBlock li {
  padding-bottom: 28px;
}


.img-mobileScreens {
  position: absolute;
  width: 953px;
  height: 850px;
  bottom: 14px;
  right: 0;
  top: -150px;
  z-index: 10;
}

@media (min-width: 1400px) and (max-width: 1600px) {
  .img-mobileScreens {
    right: -120px;
  }
}
@media (min-width: 1200px) and (max-width: 1400px) {
  .img-mobileScreens {
    width: 763px;
    height: 650px;
    right: -120px;
  }
}

@media (min-width: 375px) and (max-width: 1200px) {
  .img-mobileScreens {
    width: 454px;
    height: 405px;
    top: -100px;
    left: -130px;
    bottom: 0;
  }
  .content-listBlock {
    padding-top: 326px;
  }
}
@media (min-width: 375px) and (max-width: 1400px) {
  .content-buttonBlock{
    padding-bottom: 73px;
  }
}

@media (min-width: 375px) and (max-width: 1400px) {
  .container {
    width: 85%;
  }

  .content-listBlock {
    font-size: 24px;
    line-height: 130%;
  }

  .content-listBlock li {
    padding-bottom: 50px;
  }

  .content-buttonBlock {
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    padding-top: 0px;
  }

  .content-buttonBlock img {
    height: 43px;

  }

  .imgGooglePlay {
    width: 151px;
  }

  img .imgAppStore {
    width: 132px;
    margin-right: 0px;
  }
}




</style>
