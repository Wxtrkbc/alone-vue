<template lang="pug">
  header.main-header
    icon(name="camera" scale="3")
    .header-body
      .header-left
        span Alone
      .header-center
        .search Search
      .header-right
        .info
          .content Login
          .content Register
          .content User

</template>

<script>
  export default{
      name: 'header',
      data:() => {}
  }
</script>



<style lang="stylus" scoped>
  header.main-header
      position fixed
      color black
      height 77px
      top 0
      width 100%
      border-bottom 1px solid rgba(0,0,0,.0975)

    .header-body
      display flex
      justify-content center //项目在主轴上的对齐方式。
      width 100%
      max-width 1010px
      padding 26px 40px

      .header-left
        flex 0 0 20%

      .header-center
        flex 0 0 50%

      .header-right
        flex 0 0 30%
        .info
          display flex
          justify-content center
          .content
            flex 0 0 33.3333%
</style>
