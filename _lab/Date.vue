<template>
<div class="date">
  <datetime v-model="date" type="datetime" input-format="DD-MM-YYYY HH:mm" wrapper-class="my-wrapper-class" input-class="my-input-class" placeholder="Select date" locale="es" :disabled-dates="['2017-09-07', ['2017-09-25', '2017-10-05']]" monday-first auto-continue
    auto-close required></datetime>
</div>
</template>


<script>
import Vue from 'vue'

import Datetime from 'vue-datetime';

Vue.use(Datetime)

Vue.extend({
  template: '...',
  components: {
    datetime: Datetime
  }
})
</script>


<style>
.vdatetime-popup__header,
.vdatetime-popup__date-picker__item--selected>span>span,
.vdatetime-popup__date-picker__item--selected:hover>span>span {
  background: #FF9800;
}

.vdatetime-popup__list-picker__item--selected,
.vdatetime-popup__actions__button {
  color: #FF9800;
}
</style>
