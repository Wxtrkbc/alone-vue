
import * as fetch from '../common/fetch.js'
import * as types from './mutation-types'


export const login = ({ commit, state }, form) => {
	fetch.login(form).then(function({ status, data }){
		commit(types.UPDATE_USERINFO, data)
	})
}