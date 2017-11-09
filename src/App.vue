<template>
  <div id="app">

    <router-view></router-view>
    <!-- <chart></chart> -->

  </div>
</template>

<script>
  // import Chart from '@/components/Chart'
  // import Yearslog from '@/components/Yearslog'
  // import Animals from '@/components/Animals'

  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .astrochart {
    max-height: 70vh;
  }
  .flatpickr-current-month {
    font-size: 16px!important;
  }
  span.cur-month {
    font-size: 16px!important;
  }
</style>
