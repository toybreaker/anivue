<template>
  <div class="years">
    <div class="years_title">
      Year Cycles
    </div>
  </div>
</template>

<script>
  import json from '@/assets/json/years.json'
  // ....
  json.forEach(x => {
    console.log(x.year, x.animal, x.element)
  })

  export default {
    name: 'Years'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  > * {
    font-weight: normal;
    color: red;
  }
</style>
