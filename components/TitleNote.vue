<template>
  <div class="titleNote">
    <div class="container">
      <div class="titleNote-mainBlock">
        <cross-icon class="titleNote-cross_icon"/>
        <div class="titleNote-entriesBlock">
          <div class="titleNote-enentriesBlock_text">
            {{$t('titleNoteEntries')}}
          </div>
          <p>—  {{$t('titleNoteEntriesMark')}} 11:24</p>
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


</style>
