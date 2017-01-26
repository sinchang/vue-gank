<template lang="html">
  <div>
    <div class="container">
      <div class="list-group">
        <div v-for="data in datas">
          <div class="list-group-item" v-if="type==='福利'"><img :src="data.url" alt="image"></div>
          <a :href="data.url" target="_blank" class="list-group-item" v-else>{{data.desc}}</a>
        </div>
      </div>
      <ul class="pager" id="pager">
        <li class="previous"><a href="javascript:;" @click="prev">← Prev</a></li>
        <li class="next"><a href="javascript:;" @click="next">Next →</a></li>
      </ul>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import loading from './loading'
  import axios from 'axios'
  import constant from '../common/js/constant'

  export default {
    name: 'category',
    data() {
      return {
        loading: false,
        page: 1,
        datas: [],
        type: 1,
        types: {
          1: '前端',
          2: 'Android',
          3: 'iOS',
          4: '拓展资源',
          5: 'App',
          6: '福利',
          7: '瞎推荐'
        },
      }
    },
    components: {
      loading
    },
    created() {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.type = this.types[this.$route.params.type];
        this.loading = true;
        axios.get(constant.APIURL + 'data/' + this.type + '/20/' + this.page)
          .then((res) => {
            this.loading = false;
            this.datas = res.data.results;
            window.scrollTo(0, 0);
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
          })
      },
      prev() {
        if (this.page === 1) {
          alert('再往前已无数据');
          return;
        }
        this.page--;
        this.fetchData();
        window.scrollTo(0, 0);
      },
      next() {
        this.page++;
        this.fetchData();
      }
    }
  }
</script>

<style lang="css">
</style>