<template lang="pug">
  .home
    main-header
    router-view
    main-footer
</template>

<script>

  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'home'
      }
    },
    components: {
      MainHeader: Header,
      MainFooter: Footer,
    }
  }
</script>
