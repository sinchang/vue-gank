<template lang="html">
  <div>
    <v-header></v-header>
    <router-view class="view"></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import vHeader from './components/header'
  import vFooter from './components/footer'
  export default {
    name: 'App',
    components: {
      vHeader,
      vFooter
    }
  }
</script>
