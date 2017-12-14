
import { $ } from './api.js'
const baseUrl = 'http://127.0.0.1:8000/'
const version = 'v1'
const url = baseUrl + version

addCountryCode = (phone) => '+86' + phone

export const login = (form) => $.post(url + '/users/login', form)

