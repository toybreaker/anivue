<template>
  <div class="yearslog">
    <div class="years_title">Years Animal + infos in console!</div>

  </div>
</template>

<script>
  import yearlist from '@/assets/json/years.json'
  // ....
  yearlist.forEach(x => {
    console.log(x.year, x.animal, x.element, x.start_date, x.yinyang)
  })
  export default {
    name: 'Yearslog'
  }
</script>

<style scoped>
  > * {
    font-weight: normal;
    color: red;
  }
</style>
