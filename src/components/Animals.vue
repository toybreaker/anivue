<template>
  <div class="animals">
    <div class="years_title">Year Animals</div>
    <div class="years_list" id="years_list"></div>
  </div>
</template>

<script>
var Vue = require('vue')
var VueResource = require('vue-resource')

Vue.use(VueResource)
// GET /someUrl
this.$http.get('/./assets/json/years.json').then(response => {
  // get body data
  this.item = data
}, response => {
  console.log(data)
})

</script>

<style scoped>
> * {
  font-weight: normal;
  color: red;
}
</style>
