/**
 * Created by ahprosim on 17/01/2018.
 */

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

export {
  setInfoInLocal,
  getInfoFromLocal,
  removeInfoFormLocal
}
