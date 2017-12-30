<template lang="pug">
  .register
    .register-body(class="account-border")
      h1(class="logo") Alone
      h2 Sign up to see photos and videos from your friends.
      el-form(ref="registerForm", :model="registerForm", class="account-form")
        el-form-item
          el-input(v-model="registerForm.contact" placeholder="Mobile Number or Email")
        el-form-item
          el-input(v-model="registerForm.username" placeholder="Username")
        el-form-item
          el-input(type="password" v-model="registerForm.password" placeholder="Password")
        el-form-item
          el-button(@click="submit(registerForm)" type="primary") Sing up
      p By signing up, you agree to our Terms & Privacy Policy.
    .register-footer(class="account-border account-footer")
      p Have an account?
        router-link(to="/account/login") Log in

</template>


<script>
  import ElFormItem from "../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
  export default {
    components: {ElInput, ElFormItem},
    data(){
        return{
            registerForm:{
                contact: "",
                username: "",
                password: ""
            }
        }
    },

    methods: {
        submit(form) {

        }
    }

  }

</script>


<style lang="stylus">
  @import "../../common/account.styl"

  .register
    margin-top :50px

    .register-body
      h2
        font-weight 600
        line-height 20px
        font-size 17px
        margin 0 40px 20px 40px
        text-align center
        color #999

      p
        margin 10px 60px
        text-align center
        line-height 18px
        font-size 14px
        color #999
  

</style>
