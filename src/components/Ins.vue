<template lang="pug">
  .container
    .ins
      article(v-for="item in ins")
        .header
          img(:src="item.avatar")
          p {{ item.name }}

        .body
          img(:src="item.urls[0]")
        .footer
          section(class="icon")
            icon(name="heart-o" scale='1.5' class="like")
            icon(name="comment-o" scale='1.6')
          section
            .likes {{ item.likes }} likes
          .brife {{ item.name }} {{ item.brief }}

    .story


</template>

<script>
  export default {
    data () {
      return {
        ins: [
          {
            'name': 'steveaoki',
            'avatar': '/static/ins/steveakio.jpg',
            'urls': ['/static/ins/steve.jpg',],
            'comments': [],
            'likes': 7097,
            'brief': 'Should we go up or down'
          }, {
            'name': 'steveaoki',
            'avatar': '/static/ins/steveakio.jpg',
            'urls': ['/static/ins/steve.jpg',],
            'comments': [],
            'likes': 7097,
            'brief': 'Should we go up or down'
          }]
      }
    },
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
