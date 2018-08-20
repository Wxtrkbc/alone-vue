/**
 * Created by ahprosim on 17/01/2018.
 */

import store from '../store'
import router from '../router'
import COS from 'cos-js-sdk-v5'
import {getTempCosToken} from './fetch'
import eventBus from '../common/eventbus'

const day = 60 * 60 *24;

function setInfoInLocal(data) {
  let info = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
  let date = new Date();
  window.localStorage.setItem('userInfo', info);
  window.localStorage.setItem('date', btoa(date.getTime()))
}

function getInfoFromLocal() {
  let info = window.localStorage.getItem('userInfo');
  let date = window.localStorage.getItem('date');
  if(info && date){
    return {
      'info': JSON.parse(decodeURIComponent(escape(atob(info)))),
      'date': atob(date)
    }
  }
  return {
    'info': info,
    'date': date
  }
}

function removeInfoFormLocal() {
  window.localStorage.removeItem('userInfo');
  window.localStorage.removeItem('date')
}


function loginHock() {
  let userInfo = getInfoFromLocal();
  if(userInfo.info && userInfo.date){
    let date = new Date().getTime();
    if(date - userInfo.date < 1000 * day * 14){
      store.dispatch('updateUserInfo', userInfo.info)
    }
  }else {
    router.push('/account')
  }

}


function getTempCos() {

    return new COS({
    FileParallelLimit: 5,
    getAuthorization: function (options, callback) {
      // let data = {
      //   "credentials": {
      //     "sessionToken": "52641ddf39911142050f416afb3eaef962635be130001",
      //     "tmpSecretId": "AKIDWFPouj0aS0NUdWEOv5qljJwXMEg8NVHS",
      //     "tmpSecretKey": "RE3kEr8OvWY34pg1d1HPOExR1iOnheE4"
      //   }, "expiredTime": 1534562396
      // }
      var token = getTempCosToken().then(({status, data}) => data).catch((err) => eventBus.$emit('errorMessage', 'Get temp token error'));
      debugger;
      callback({
        TmpSecretId: token.credentials && token.credentials.tmpSecretId,
        TmpSecretKey: token.credentials && token.credentials.tmpSecretKey,
        XCosSecurityToken: token.credentials && token.credentials.sessionToken,
        ExpiredTime: token.expiredTime,
      })
    }

  })
}

export {
  setInfoInLocal,
  getInfoFromLocal,
  removeInfoFormLocal,
  loginHock,
  getTempCos
}
