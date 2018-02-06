import { $ } from './api.js'

const baseUrl = 'http://127.0.0.1:8000/';
const version = 'v1';
const url = baseUrl + version;

const login = (form) => $.post(url + '/users/login', form);
const register = (form) => $.post(url + '/users', form);
const getFollowingIns = (params) => $.get(url + '/ins', params);
const getUserInfo = (uuid) => $.get(url + '/' + uuid, undefined);

export {
  login,
  register,
  getFollowingIns,
  getUserInfo
};
