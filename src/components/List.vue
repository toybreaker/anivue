<template >
  <ul class="years" id="example-1">
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>
</template>

<script>
  var example1 = new Vue({
    el: '#example-1',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })
</script>

<style scoped>
  li {
    font-weight: normal;
    color: red;
  }
</style>
