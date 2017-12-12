<template lang="pug">
  header.main-header
    .header-body
      .header-left
        icon(name="camera" scale="2")
        span Alone
        router-link(to="/")  go to root
      .header-center
      .header-right

</template>

<script>
  export default{
    name: 'header',
    data:() => {}
  }
</script>



<style lang="stylus">

</style>
