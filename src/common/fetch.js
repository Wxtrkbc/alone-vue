import { $ } from './api.js'

const baseUrl = 'http://127.0.0.1:8000/';
const version = 'v1';
export const URL = baseUrl + version;

const login = (form) => $.post(URL + '/users/login/', form);
const register = (form) => $.post(URL + '/users/register/', form);
const getFollowingIns = (params) => $.get(URL + '/ins/', params);
const getUserInfo = (uuid) => $.get(URL + '/users/' + uuid+'/', undefined);
const getFollowers = (uuid)=> $.get(URL + '/users/' + uuid +'/followers/');
const getFollowing = (uuid)=> $.get(URL + '/users/' + uuid +'/following/');

export {
  login,
  register,
  getFollowingIns,
  getUserInfo,
  getFollowers,
  getFollowing,
};

