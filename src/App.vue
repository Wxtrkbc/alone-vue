
<template lang="pug">
  #app
    .main-container
      main-header
      router-view.router-view
      main-footer
      login
</template>


<script>
  import Header from './components/layout/Header.vue'
  import Footer from './components/layout/Footer.vue'
  import Login from './components/user/Login.vue'
  
  export default {
    name: 'app',
    data:() => {},
    components:{
      MainHeader: Header,
      MainFooter: Footer,
      Login: Login,
    }
  }

</script>


<style lang="stylus">
  .main-container
    display: flex
    flex-direction column
</style>


