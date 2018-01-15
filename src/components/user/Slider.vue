<template lang="pug">
  transition-group(name="images")
    img(v-for="(image, index) in images" :key="index" :src="image" v-show="index===mark")

</template>

<script>
  export default {
    name: 'silder',
    props: ['images'],

    data(){
      return {
        mark: 0,
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

