<template lang="html">
  <div class="container">
    <div class="list-group">
      <router-link :to="{ name: 'home', params: { day: date }}" class="list-group-item" v-for="date in dates">{{date}}</router-link>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import axios from 'axios'
  import loading from './loading'
  import constant from '../common/js/constant'

  export default {
    name: 'history',
    data() {
      return {
        loading: false,
        dates: []
      }
    },
    components: {
      loading
    },
    mounted() {
      this.loading = true;
      axios.get(constant.APIURL + 'day/history')
        .then((res) => {
          this.loading = false;
          this.dates = res.data.results;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        })
    }
  }
</script>

<style lang="css">
</style>
