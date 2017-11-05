<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ payoff }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'anivue yeah',
        payoff: 'start learn it!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: red;
  }

  a {
    color: #42b983;
  }
</style>
