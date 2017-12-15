<template lang="pug">
	.header login
</template>

<script>
import { mapActions } from 'vuex'

export default {

	methods: {
		...mapActions([
			'login',
		]),
	},


	created () {
		this.login({
    		"name": "wangdong4",
    		"password": "wdjjww78"
		})
	}
}


</script>