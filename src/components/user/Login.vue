<template lang="pug">
  .login
    slider
    .login-body
      .login-content(class="_box")
        h1 Alone
        el-form(ref="form", :model="loginForm")
          el-form-item
            el-input(v-model="loginForm.name" placeholder="Username or phone number")
          el-form-item
            el-input(type="password" v-model="loginForm.password" placeholder="Password")
          el-form-item
            el-button(@click="submit(loginForm)" type="primary") Log in
          el-form-item
            el-button(type="text") Forgot password?

      .login-footer(class="_box")
        p Don't have an account?
          a Sign up


</template>


<script>
  import {mapActions} from 'vuex'
  import Slider from './Slider'

  export default {

    data() {
      return {
        loginForm: {
          name: "",
          password: "",
        }
      }
    },
    components: {
      Slider: Slider,
    },

    methods: {
      ...mapActions([
        'login',
      ]),

      submit(loginForm) {
        this.login(loginForm)
      }
    },
  }

</script>


<style lang="stylus">
  .login
    display: flex
    margin: 80px auto 0

    ._box
      background-color: #fff
      border: 1px solid #e6e6e6
      border-radius: 1px
      width: 340px
    .login-body
      margin-top: 100px
    .login-content
      h1
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif
        text-align: center
      .el-form
        width: 240px
        margin: 0 auto
        .el-form-item
          .el-button
            width: 240px

    .login-footer
      margin: 20px 0
      p
        text-align: center
        a
          margin-left: 5px

</style>
