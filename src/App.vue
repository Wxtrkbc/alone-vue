
<template lang="pug">
  #app
    .main-container
      router-view.router-view
</template>


<script>

  import eventBus from './common/eventbus'
  
  export default {
    name: 'app',

    created(){
      eventBus.$on('successMessage', (message) =>this.$message(message)),

      eventBus.$on('errorMessage', (message) => this.$message.error(message))

    },

    data:() => {}
  }

</script>


<style lang="stylus">
  .main-container
    display: flex
    flex-direction column
</style>


