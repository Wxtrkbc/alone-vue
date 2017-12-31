<template lang="pug">
  .box
    .picture
      transition-group(name="images")
        img(v-for="(image, index) in images" :key="index" :src="image" v-show="index===mark")

</template>

<script>
  export default {
    name: 'silder',

    data(){
      return {
        mark: 0,
        images: [
          '/static/picture/001bc33056c1.jpg',
          '/static/picture/2d9d7248af43.jpg',
          '/static/picture/629d23a3c7b2.jpg',
          '/static/picture/aafd8c6b005d.jpg',
          '/static/picture/f5ae123ab1e2.jpg'
        ]
      }
    },

    methods: {
      autoPlay(){
        var _this = this
        setInterval(function () {
          _this.mark++;
          if (_this.mark == 4) {
            _this.mark = 0
          }
        }, 2500)
      }
    },


    created() {
      this.autoPlay()
    }
  }

</script>


<style lang="stylus">
  .box
    background-image url('/static/picture/f82c2ede4ccb.png')
    background-size 454px 618px
    height 618px
    width 454px

    .picture
      margin 99px 0 0 151px
      img
        position absolute

    .images-enter-active
      transform translateX(0)
      transition all 1.5s ease

    .image-leave-active
      transform translateX(-100%)
      transition all 1.5s ease

    .image-enter
      transform translateX(100%)

    .image-leave
      transform translateX(0);


</style>

