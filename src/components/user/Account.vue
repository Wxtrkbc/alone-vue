<template lang="pug">
  .account
    .box
      .picture
        slider(:images="images")
    router-view


</template>


<script>
  import {mapActions} from 'vuex'
  import Slider from './Slider'

  export default {

    data() {
      return {
        images: [
          '/static/picture/001bc33056c1.jpg',
          '/static/picture/2d9d7248af43.jpg',
          '/static/picture/629d23a3c7b2.jpg',
          '/static/picture/aafd8c6b005d.jpg',
          '/static/picture/f5ae123ab1e2.jpg'
        ]
      }
    },

    components: {
      Slider: Slider
    }
  }

</script>


<style lang="stylus">
  .account
    display: flex
    margin: 80px auto 0

    .box
      background-image url('/static/picture/f82c2ede4ccb.png')
      background-size 454px 618px
      height 618px
      width 454px

      .picture
        margin 99px 0 0 151px

</style>
