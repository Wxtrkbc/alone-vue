<template lang="pug">
  .login
    .login-body
      .login-content(class="account-border")
        h1(class="logo") Alone
        el-form(ref="loginForm", :model="loginForm", class="account-form", :rules="rules")
          el-form-item(prop="name")
            el-input(v-model="loginForm.name" placeholder="Username or phone number")
          el-form-item(prop="password")
            el-input(type="password" v-model="loginForm.password" placeholder="Password")
          el-form-item
            el-button(@click="submit('loginForm')" type="primary") Log in
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
        },
        rules: {
          name: [
            { required: true, message: 'Please enter username', trigger: 'blur' }
          ],

          password: [
            { required: true, message: 'Please enter password', trigger: 'blur' }
          ]
        }
      }

    },

    methods: {

      ...mapActions([
        'login',
      ]),

      submit(loginForm) {
        this.$refs[loginForm].validate((valid) => {
            if(valid){
              this.login(this.loginForm);
              this.$router.push({path: '/ins'})
            } else {
              return false
            }
        })


      },

    },
  }

</script>


<style lang="stylus">
  @import "../../common/account.styl"

  .login-body
    margin-top 100px

</style>
