/**
 * Created by ahprosim on 17/01/2018.
 */

import store from '../store'
import router from '../router'
import COS from 'cos-js-sdk-v5'
import {URL} from './fetch'

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
      var url = URL + '/temp_cos_token';
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.open('GET', url, true);
      xhr.onload = function (e) {
        try {
          var data = JSON.parse(e.target.responseText);
        } catch (e) {
        }
        callback({
          TmpSecretId: data.credentials && data.credentials.tmpSecretId,
          TmpSecretKey: data.credentials && data.credentials.tmpSecretKey,
          XCosSecurityToken: data.credentials && data.credentials.sessionToken,
          ExpiredTime: data.expiredTime,
        });
      };
      xhr.send();
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
