<template lang="pug">
	.login
		.login-body
			.login-content
				h1 Alone
				el-form(ref="form", :model="loginForm")
					el-form-item
						el-input(v-model="loginForm.name" placeholder="Username")
					el-form-item
						el-input(type="password" v-model="loginForm.password" placeholder="Password")
					el-form-item
						el-button(@click="submit(loginForm)" type="primary") Login
					el-form-item
						el-button(type="text") Forget password?

		.login-footer
			p No account?
				a register


</template>



<script>
	import { mapActions } from 'vuex'

	export default {

		data() {
			return {
				loginForm:{
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
	.login
		.login-body, .login-footer
			background-color: #fff
			border: 1px solid #e6e6e6
			border-radius: 1px
			width: 340px
			.login-content
				width: 240px
				margin: 0 auto
				h1	
					font-family:"Trebuchet MS", Arial, Helvetica, sans-serif
					text-align: center
					width: 240px	
				.el-button
					width: 240px

		.login-footer
			margin: 20px 0
			p
				text-align: center
				a
					margin-left: 5px 

</style>