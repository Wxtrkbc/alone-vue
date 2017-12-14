
import * as fetch from '../common/fetch.js'

const actions = {
	login ({ commit, state }, form) {
		fetch.login(form).then(function({status, data}){
			commit 'UPDATE_USERINFO', data
		}, )
	}
}


export default {
	actions,
}