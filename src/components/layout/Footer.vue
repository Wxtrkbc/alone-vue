<template lang="pug">
  footer.main-footer
    <!--icon(name="con-indent-left")-->
    .container
      .footer-info
        ul.footer-list
          li(v-for="")


</template>

<script>
  export default{
    name: 'footer',
    data:() => ({
      footerLis: [
          name
      ]
    })

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
