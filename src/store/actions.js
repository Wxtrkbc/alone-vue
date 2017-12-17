
import * as fetch from '../common/fetch.js'
import * as types from './mutation-types'
import eventBus from '../common/eventbus'


export const login = ({ commit, state }, form) => {
	fetch.login(form)
	.then(function({ status, data }){
		commit(types.UPDATE_USERINFO, data);
	})
	.catch(function(status, data){
		var message;
		if (status == 401){
			message = "username or password error!";
		} else {
			message = "Internal Server Error";
		}
		return eventBus.$emit('errorMessage', message)
	})
}
