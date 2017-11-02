<template>
  <datepicker></datepicker>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

Vue.component('my-component', {
    components: {
        Datepicker
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
