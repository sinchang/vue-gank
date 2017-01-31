<template lang="html">
  <div class="">
    <ul class="pager">
      <li><button @click="prev" class="btn btn-success btn-sm">Previous</button></li>
      <li>
        <button class="btn btn-success btn-sm">{{day}}</button>
      </li>
      <li><button class="btn btn-success btn-sm" @click="next">Next</button></li>
    </ul>
    <div class="container content">
      <div v-if="isEmpty">非常抱歉，今日无数据，前往<router-link :to="{path: '/history'}">历史</router-link>看看吧😀</div>
      <h2 class="title">{{content.title}}</h2>
      <div class="index-content" v-html="content.content">
      </div>
    </div>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
  import axios from 'axios'
  import constant from '../common/js/constant'
  import loading from './loading'
  import util from '../common/js/util'

  export default {
    name: 'home',
    data() {
      return {
        loading: false,
        isEmpty: false,
        day: '',
        content: {}
      }
    },
    components: {
      loading
    },
    watch: {
      '$route': 'fetchData'
    },
    created() {
      let paramsDay = util.formatDate(this.$route.params.day);

      if (util.isDate(paramsDay)) {
        this.day = paramsDay;
      } else {
        this.day = util.formatDate(new Date());
      }

      this.fetchData();
    },
    updated() {
      let imgGroup = document.querySelectorAll('.content ul li ul');
      for (let i = 0, l = imgGroup.length; i < l; i++) {
        imgGroup[i].parentNode.removeChild(imgGroup[i]);
      }
    },
    methods: {
      fetchData() {
        this.loading = true;
        axios.get(constant.APIURL + 'history/content/day/' + this.day)
          .then((res) => {
            this.isEmpty = false;
            this.loading = false;
            let results = res.data.results;
            this.$router.push({
              name: 'home',
              params: { day: this.day.replace(/\//g, '-') }
            });
            if (!results.length) {
              this.isEmpty = true;
              this.content = '';
              return;
            }
            this.content = results[0];
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
          })

      },
      prev() {
        this.day = util.changeDate(this.day, 'subtract', 1);
        this.fetchData();
      },
      next() {
        this.day = util.changeDate(this.day, 'add', 1);
        if (this.day > util.formatDate(new Date())) {
          this.day = util.changeDate(this.day, 'subtract', 1);
          return;
        }
        this.fetchData();
      }
    }
  }
</script>
