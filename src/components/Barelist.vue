<template>
  <ul id="barelist" class="barelist">
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'barelist',
  props: ['item'],
  data () {
    return {
      items: [{
        message: 'Foo'
      },
      {
        message: 'Muu'
      },
      {
        message: 'Sii'
      },
      {
        message: 'Bee'
      }]
    }
  }
}
</script>

<style scoped>
>* {
  font-weight: normal;
  color: red;
}
</style>
