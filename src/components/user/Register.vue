<template lang="pug">
  .register
    .register-body(class="account-border")
      h1(class="logo") Alone
      h2 Sign up to see photos and videos from your friends.
      el-form(ref="registerForm", :model="registerForm", class="account-form", :rules="rules")
        el-form-item(prop="contact")
          el-input(v-model="registerForm.contact" placeholder="Mobile Number or Email")
        el-form-item(prop="name")
          el-input(v-model="registerForm.name" placeholder="Username")
        el-form-item(prop="password")
          el-input(type="password" v-model="registerForm.password" placeholder="Password")
        el-form-item
          el-button(@click="submit('registerForm')" type="primary") Sing up
      p By signing up, you agree to our Terms & Privacy Policy.
    .register-footer(class="account-border account-footer")
      p Have an account?
        router-link(to="/account/login") Log in

</template>


<script>
  import {mapActions} from 'vuex'

  export default {
    data(){

      var validateContact = (rule, value, callback) => {
          if (this.isPhone(value)){
            if (value.match(/^(\+\d+){1}\d+$/)) {
              callback()
            } else {
              callback(new Error("Phone number seems not valid"))
            }
          } else{
              if (value.match(/^\S+@\S+\.\S\S+$/)){
                  callback()
              } else {
                callback(new Error("Email seems not valid"))
              }
          }

        }

      return {
        registerForm: {
          contact: "",
          name: "",
          password: ""
        },

        rules: {
            contact: [
              { required: true, message: 'Please enter mobile number or email', trigger: 'blur' },
              { validator: validateContact, trigger: 'blur' }
            ],

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

      isPhone(value){
        return value.indexOf('@') <= 0
      },

      ...mapActions([
        'register',
      ]),

      submit(registerForm) {
        this.$refs[registerForm].validate((valid) => {
            if (valid) {
              if (this.isPhone(this.registerForm.contact)) {
                this.registerForm.phone = this.registerForm.contact
              } else {
                this.registerForm.email = this.registerForm.contact
              }
              delete this.registerForm.contact
              this.register(this.registerForm)
            } else {
                return false
            }
        })

      },

    }

  }

</script>


<style lang="stylus">
  @import "../../common/account.styl"

  .register
    margin-top: 50px

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
