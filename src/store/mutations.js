import * as types from './mutation-types'

const mutations = {
	[types.UPDATE_USERINFO] (state, userInfo) {
		state.userInfo = userInfo
	},

	[types.UPDATE_LOGIN_STATUS] (state, loginStatus) {
		state.isLogin = loginStatus
	}
}

export dafult {
	mutations,
}