<template lang="pug">
  header.main-header
    .header-left
      icon(name="camera" scale="1.5")
      p &#124
      h2 Alone
    .header-center
      input(type="text" placeholder="Search")
      icon(name="search" scale="0.7" class="search")
    .header-right
      icon(name="compass" scale="1.5")
      icon(name="heart-o" scale="1.5")
      icon(name="user-o" scale="1.5")

</template>

<script>
  import Icon from "../../../node_modules/vue-awesome/components/Icon";
  export default{
    components: {Icon}, name: 'header',
    data:() => {}
  }
</script>



<style lang="stylus">
  .main-header
    display flex
    align-items center
    justify-content space-around
    background-color #fff

    .header-left
      display flex
      align-items center
      justify-content space-between
      width 150px
      p
        color #c3c3c3
        font-size 30px
        margin 0 0

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


    .header-right
      width 200px
      display flex
      justify-content space-around

</style>
