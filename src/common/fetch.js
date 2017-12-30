
import { $ } from './api.js'
const baseUrl = 'http://127.0.0.1:8000/';
const version = 'v1';
const url = baseUrl + version;

export const login = (form) => $.post(url + '/users/login', form);
export const register = (form) => $.post(url + '/users', form);
