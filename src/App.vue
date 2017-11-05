<template>
  <div id="app">

    <hello></hello>

    <router-view></router-view>

  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    }
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
