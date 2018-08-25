<template lang="pug">
  .container
    .ins
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getUserInfo } from '../common/fetch.js'

  export default{
    name: 'profile',
    data(){
      return{
        profile: ''
      }
    },

    computed: {
      ...mapGetters([
          'userInfo',
      ])
    },

    mounted(){
      this.initData()
    },

    methods: {
      getProfile(){
        return getUserInfo(this.$route.params.uuid).then(({status, data}) => data)
          .catch((err) => eventBus.$emit('errorMessage', 'Get UserInfo error'))
      },


      initData(){
        this.getProfile().then(data => {
          this.profile = data
        })
      }
    }

  }

</script>



<style lang="stylus">
  .container
    display flex
    justify-content center

</style>
