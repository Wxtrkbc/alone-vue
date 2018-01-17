<template lang="pug">
  header.main-header
    .header-left
      icon(name="camera" scale="1.5")
      p &#124
      router-link(to="/ins" tag="h2") Alone
    .header-center
      input(type="text" placeholder="Search")
      icon(name="search" scale="0.7" class="search")
      i(class="el-icon-circle-close close", @click="toggle")
      .display(v-show="show", @click="toggle")
        icon(name="search" scale="0.7" class="display-icon")
        span Search
    .header-right
      icon(name="compass" scale="1.5")
      icon(name="heart-o" scale="1.5")
      icon(name="user-o" scale="1.5")

</template>

<script>
  export default{
    name: 'header',
    data () {
      return {
          show: true
      }
    },
    methods:{
        toggle(){
            this.show = !this.show
        }
    }
  }
</script>


<style lang="stylus">
  .main-header
    display flex
    align-items center
    justify-content space-around
    background-color #fff
    border-bottom 1px solid #efefef

    .header-left
      display flex
      align-items center
      justify-content space-between
      width 150px
      p
        color #c3c3c3
        font-size 30px
        margin 0 0

      h2
        cursor pointer

    .header-center
      position relative

      .search
        color #999
        position absolute
        left 8px
        top 6px

      input
        border solid 1px #dbd
        border-radius 3px
        padding 3px 10px 3px 26px
        font-size 14px
        outline none

      .close
        color #999
        right 5px
        top 5px
        position absolute

      .display
        width 147px
        color #999
        font-weight 300
        border solid 1px #dbdbdb
        border-radius 3px
        z-index 2
        font-size 14px
        background-color #fafafa
        padding 3px 10px 3px 26px
        text-align center
        position absolute
        top 0px
        cursor text

        .display-icon
          display inline-block
          margin-top 2px
          margin-right 8px

    .header-right
      width 200px
      display flex
      justify-content space-around

</style>
