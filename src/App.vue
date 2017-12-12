
<template lang="pug">
  #app
    .main-container
      main-header
      router-view.router-view
      main-footer
</template>


<script>
  import Header from './components/layout/Header.vue'
  import Footer from './components/layout/Footer.vue'

  export default {
    name: 'app',
    data:() => {},
    components:{
      MainHeader: Header,
      MainFooter: Footer
    }
  }
</script>


<style lang="stylus">
  .main-container
    display: flex
    flex-direction column
</style>


