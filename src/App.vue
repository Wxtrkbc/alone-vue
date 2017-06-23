
<template lang="pug">
  #app
    .main-container
      main-header
      router-view.router-view
      main-footer
</template>


<script>
  import Header from './components/layout/Header.vue'

  export default {
    name: 'app',
    data:() => {},
    components:{
      MainHeader:Header,
    }
  }
</script>


<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
