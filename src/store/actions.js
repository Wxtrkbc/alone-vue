
import * as fetch from '../common/fetch.js'
import * as types from './mutation-types'
import eventBus from '../common/eventbus'
import { setInfoInLocal,getInfoFromLocal,removeInfoFormLocal } from '../common/utils'

export const login = ({ commit, state }, form) => {
	fetch.login(form)
	.then(function({ status, data }){
		commit(types.UPDATE_USERINFO, data);
		setInfoInLocal(data)
	})
	.catch(function(err){
		var message;
		if (err.status === 401){
			message = "username or password error!";
		} else {
			message = "Internal Server Error";
		}
		return eventBus.$emit('errorMessage', message)
	})
};

export const register = ({ commit, state }, form) => {
  fetch.register(form)
    .then(function({ status, data }){
      commit(types.UPDATE_USERINFO, data);
      setInfoInLocal(date);
    })
    .catch(function(err){
      var message;
      if (err.status === 400){
        message = "Phone number or email seems not valid";
      } else {
        message = "Internal Server Error";
      }
      return eventBus.$emit('errorMessage', message)
    })
};


