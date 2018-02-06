<template lang="pug">
  p {{ userInfo }}
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
