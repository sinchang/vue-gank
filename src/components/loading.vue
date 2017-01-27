<template lang="html">
  <div class="loading" v-show="show">
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    props: {
      show: {
        type: Boolean
      }
    }
  }
</script>
