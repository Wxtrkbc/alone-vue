<template lang="pug">
  .container
    .ins
      article(v-for="item in ins")
        .header
          img(:src="item.owner.avatar")
          p {{ item.owner.name }}

        .body
          img(:src="item.urls[0]")
        .footer
          section(class="icon")
            icon(name="heart-o" scale='1.5' class="like")
            icon(name="comment-o" scale='1.6')
          section
            .likes {{ item.likes_count }} likes
            ul
              li
                a(class="load") Load more comments
              li
                router-link(to="/profile") {{ item.owner.name }}
                span {{ item.brief }}
              li(v-for="comment in item.comments  ")
                router-link(to="/profile") {{ comment.poster.name }}
                span {{ comment.content }}
          section(class="comment")
            textarea(v-model="comment" placeholder="Add a comment...")


    .story
      .profile
        router-link(to="/profile")
          img(:src="userInfo.avatar")
        router-link(to="/profile")
          span {{ userInfo.name }}





</template>

<script>
  import {getFollowingIns} from '../common/fetch.js'
  import eventBus from '../common/eventbus'
  import {mapGetters} from 'vuex'

  export default {

    data () {
      return {
        ins: []
      }
    },

    mounted(){
      this.initData()
    },

    computed: {
      ...mapGetters([
        'userInfo',
      ])
    },

    methods: {
      getFollowingIns(){
        return getFollowingIns().then(({status, data}) => data)
          .catch((err) => eventBus.$emit('errorMessage', 'Get following ins error'))
      },

      initData(){
        this.getFollowingIns().then(data => {
          this.ins = data.results
        })
      }
    }
  }
</script>


<style lang="stylus">

  .container
    font-family -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif
    font-size 14px
    line-height 18px
    display flex
    justify-content center
    align-items flex-start
    margin-top 60px

    .ins
      display flex
      flex-direction column
      align-items center

      article
        border-radius 3px
        border 1px solid #e6e6e6
        background-color #fff
        width 640px
        margin-bottom 50px

        .header
          border-bottom 1px solid #efefef
          display flex
          align-items center

          img
            width 30px
            height 30px
            border-radius 50%
            cursor pointer
            margin 0 10px
        .body
          img
            max-width 640px

        .footer
          .icon
            display flex
            align-items center
            margin-left 10px
            .like
              margin 5px 25px 0 0
          section
            margin 10px 10px
            .likes
              font-weight 600
              color: #262626
            .load
              cursor pointer
              color #003569
            ul
              margin-top 4px
              list-style none
              padding-left 0
              li
                margin-top 2px
            a
              text-decoration none
              font-weight 600
              margin-right 5px
              color: #262626
          .comment
            border-top 1px solid #efefef
            padding  16px 0
            margin-top 0
            margin-bottom 0
            textarea
              background 0 0
              border none
              height 18px
              resize none
              outline none
              font-size inherit
              width 620px

    .story
      width 300px
      height 300px
      background-color lightgoldenrodyellow

      a
        text-decoration none
      .profile
        display flex
        img
          width 60px
          height 60px
          border-radius 50%
          display block
        span
          display block
          color #262626
          font-weight 600
          margin-left 14px
          margin-top 14px


</style>
