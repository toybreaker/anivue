<template >
  <ul class="years" id="example-1">
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>
  <!-- <div id="years">
      <a href="#" v-for="year in years">
        <span>{{ year.year }}</span>
        <span>{{ year.animal }}</span>
      </a>
  </div> -->
</template>

<script>

export default {
  name: 'Hello',
  el: '#example-1',
  data () {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  }
}

  // export default {
  //   name: 'Years',
  //   el: '#example-1',
  //   data: {
  //     items: [
  //       { message: 'Foo' },
  //       { message: 'Bar' }
  //     ]
  //   }
  // }

  // export default {
  //   name: 'Years',
  //   el: '#years',
  //   data: {
  //     year: [
  //       { year: '2000', animal: 'dragon' },
  //       { year: '2001', animal: 'snake' }
  //     ]
  //   }
  // }

    // export default {
    //   name: 'Hello',
    //   data () {
    //     return {
    //       msg: 'anivue yeah',
    //       payoff: 'start learn it!'
    //     }
    //   }
    // }

  // var Vue = new Vue({
  //   el: '.years',
  //   data: {
  //     object: {
  //       year: '2000',
  //       animal: 'dragon',
  //       age: 17
  //     }
  //   }
  // })
  //
  // Vue()

  // var thing = new Thing();
  //
  // Thing();
  //
  // export default {
  //   name: 'Years',
  //   data () {
  //     return {
  //       year: '2000',
  //       animal: 'dragon'
  //     }
  //   }
  // }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  > * {
    font-weight: normal;
    color: red;
  }
</style>
