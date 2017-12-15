import * as types from './mutation-types'

export default {
	[types.UPDATE_USERINFO] (state, userInfo) {
		state.userInfo = userInfo
	},

	[types.UPDATE_LOGIN_STATUS] (state, loginStatus) {
		state.isLogin = loginStatus
	}
}
