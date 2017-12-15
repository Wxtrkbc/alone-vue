<template lang="pug">
	el-form(ref="form", :model="loginForm")
		el-form-item
			el-input(v-model="loginForm.name" placeholder="Username or Phonenumber")
		el-form-item
			el-input(v-model="loginForm.password" placeholder="Password")
		el-form-item
			el-button(@click="submit(loginForm)" type="primary") Login
</template>



<script>
import { mapActions } from 'vuex'

export default {

	data() {
		return {
			loginForm:{
				name: " ",
				password: " ",				
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