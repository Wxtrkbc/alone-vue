<template lang="pug">
  .login
    .login-body
      .login-content(class="account-border")
        h1(class="logo") Alone
        el-form(ref="form", :model="loginForm", class="account-form")
          el-form-item
            el-input(v-model="loginForm.name" placeholder="Username or phone number")
          el-form-item
            el-input(type="password" v-model="loginForm.password" placeholder="Password")
          el-form-item
            el-button(@click="submit(loginForm)" type="primary") Log in
          el-form-item
            el-button(type="text") Forgot password?

      .login-footer(class="account-border account-footer")
        p Don't have an account?
          router-link(to="/account/register") Sign up


</template>


<script>
  import {mapActions} from 'vuex'

  export default {

    data() {
      return {
        loginForm: {
          name: "",
          password: "",
        }
      }
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
    @import "../../common/account.styl"

    .login-body
      margin-top 100px

</style>
