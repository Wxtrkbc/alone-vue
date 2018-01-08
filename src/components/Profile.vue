<template lang="pug">
  p {{ profile }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default{
    name: 'profile',
    data(){
      return{
        profile: 'profile'
      }
    },

    computed: {
      ...mapGetters([
          'userInfo',
      ])
    }
  }

</script>



<style lang="stylus">

</style>
