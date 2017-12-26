<template lang="pug">
  .account
    slider
    router-view


</template>


<script>
  import {mapActions} from 'vuex'
  import Slider from './Slider'

  export default {

    data() {
      return {
      }
    },

    components:{
        Slider: Slider
    }
  }

</script>


<style lang="stylus">
  .account
    display: flex
    margin: 80px auto 0

</style>
