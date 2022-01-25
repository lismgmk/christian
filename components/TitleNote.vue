<template>
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
</template>

<script>
export default {
  name: "TitleNote"
}
</script>

<style scoped>

.titleNote {
  background: linear-gradient(260.17deg, rgba(0, 187, 255, 0.63) 0%, #00BBFF 100%);
}

.titleNote {
  background: linear-gradient(260.17deg, rgba(0, 187, 255, 0.63) 0%, #00BBFF 100%);
  color: white;
}

.titleNote-cross_icon {
  color: white;
}

.titleNote-mainBlock {
  font-family: Lato, SansSerif;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.titleNote-enentriesBlock_text {
  width: 730px;
  font-weight: bold;
  font-size: 36px;
  line-height: 135%;
  padding-bottom: 30px;
  padding-top: 100px;
}

.titleNote-entriesBlock p {
  font-size: 22px;
  line-height: 180%;
  padding-bottom: 141px;
}

@media (min-width: 375px) and (max-width: 1200px){
  .container {
    width: 85%;
  }

  .titleNote-mainBlock {
    flex-direction: column-reverse;

  }

  .titleNote-enentriesBlock_text {
    width: 100%;
    font-size: 24px;
    padding-top: 40px;
    padding-bottom: 22px;
  }

  .titleNote-entriesBlock p {
    line-height: 180%;
    padding-bottom: 22px;
    font-size: 14px;
  }

  .titleNote-cross_icon {
    width: 102px;
    height: 142px;
    margin-bottom: 132px;
  }
}

</style>
