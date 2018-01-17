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
          .brife {{ item.owner.name }} {{ item.brief }}

    .story


</template>

<script>
  import { getFollowingIns } from '../common/fetch.js'
  import eventBus from '../common/eventbus'

  export default {

    data () {
      return {
        ins: [
//          {
//            "uuid": "72f24a9b-4246-43cd-a916-88664b2c27f4",
//            "owner": {
//              "uuid": "afa6b1fc-26bf-4f38-82d8-ff5b84ae5e1b",
//              "name": "steveaoki",
//              "avatar": "/static/ins/steveakio.jpg"
//            },
//            "tags": [],
//            "urls": [
//              "/static/ins/steve.jpg",
//            ],
//            "created_at": "2018-01-13T06:07:45Z",
//            "brief": "Hello, jump",
//            "type": "PICTURE-INS",
//            "likes_count": 23
//          },
//          {
//            'name': 'steveaoki',
//            'avatar': '/static/ins/steveakio.jpg',
//            'urls': ['/static/ins/steve.jpg',],
//            'comments': [],
//            'likes': 7097,
//            'brief': 'Should we go up or down'
//          }, {
//            'name': 'steveaoki',
//            'avatar': '/static/ins/steveakio.jpg',
//            'urls': ['/static/ins/steve.jpg',],
//            'comments': [],
//            'likes': 7097,
//            'brief': 'Should we go up or down'
//          }
          ]
      }
    },

    mounted(){
      getFollowingIns().then(({ status, data }) => this.ins = data.result)
        .catch((err) => eventBus.$emit('errorMessage', 'Get following ins error'))
    },

    methods: {

    }
  }
</script>


<style lang="stylus">
  .container
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


        .footer
          .icon
            display flex
            align-items  center
            margin-left 10px
            .like
              margin 5px 25px 0 0
          section
            margin 10px 10px
            font-weight 600
            color #262626


    .story
      width 300px
      height 300px
      background-color lightgoldenrodyellow
</style>
