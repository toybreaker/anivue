<template>
  <div class="years" id="todo-list-example">
    <div class="years_title">Year Cycles</div>
    <ul>
      <li
        is="todo-item"
        v-for="(todo, index) in todos"
        v-bind:key="todo.id"
        v-bind:title="todo.title"
        v-on:remove="todos.splice(index, 1)"
      ></li>
    </ul>
    <div id="example">
      <my-component></my-component>
    </div>
  </div>
</template>

<script>

  Vue.component('todo-item', {
    template: '<li>{{ title }}</li>',
    props: ['title']
  })

  export default {
    el: '#todo-list-example',
    name: 'Years',
    data: {
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ]
    }
  }

</script>

<style scoped>
  > * {
    font-weight: normal;
    color: red;
  }
</style>
