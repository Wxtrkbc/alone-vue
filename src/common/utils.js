/**
 * Created by ahprosim on 17/01/2018.
 */

import store from '../store'
import router from '../router'

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

export {
  setInfoInLocal,
  getInfoFromLocal,
  removeInfoFormLocal,
  loginHock
}
