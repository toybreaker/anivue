<template>
  <div class="animals">
    <div class="years_title">Year Animals</div>
    <div class="years_list" id="years_list"></div>
  </div>
</template>

<script>
  import ye from '@/assets/js/years.js'
  // ....
  ye.forEach(x => {
    console.log(x.year, x.animal, x.element)
  })

  export default {
    name: 'Animals'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  > * {
    font-weight: normal;
    color: red;
  }
</style>
