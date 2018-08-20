import { $ } from './api.js'

const baseUrl = 'http://127.0.0.1:8000/';
const version = 'v1';
const url = baseUrl + version;

const login = (form) => $.post(url + '/users/login/', form);
const register = (form) => $.post(url + '/users/register/', form);
const getFollowingIns = (params) => $.get(url + '/ins/', params);
const getUserInfo = (uuid) => $.get(url + '/users/' + uuid+'/', undefined);
const getFollowers = (uuid)=> $.get(url + '/users/' + uuid +'/followers/');
const getFollowing = (uuid)=> $.get(url + '/users/' + uuid +'/following/');
const getTempCosToken = () => $.get(url + '/temp_cos_token');

export {
  login,
  register,
  getFollowingIns,
  getUserInfo,
  getFollowers,
  getFollowing,
  getTempCosToken
};
