<template lang="pug">
  header.main-header
    .container
      .header-body
        .header-left
          span Alone
</template>

<script>
  export default{
      name: 'header',
      data:() => {}
  }
</script>



<style lang="stylus" scoped>
  header.main-header
    position: fixed
    font-size: 15px
    color: black
    height: 40px
</style>
