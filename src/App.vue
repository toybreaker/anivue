<template>
  <div id="app">

    <img class="astrochart" src="./assets/astro-circle.svg">

    <div class="columns">
      <div class="column is-4 is-offset-4">
        <datepicker placeholder="Select your birth date.." :options="dateOptions" v-model="date1"></datepicker>
      </div>

      <div class="column is-4 is-offset-4">{{ date1 }}</div>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
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
</style>
