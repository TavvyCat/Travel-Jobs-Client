'use strict'

const store = require('./../store')
const apiUrl = require('./../config')

const ajaxSignUp = user => {
  return $.ajax({
    method: 'POST',
    url: `${apiUrl}/sign-up`,
    data: user
  })
}

const ajaxSignIn = credentials => {
  return $.ajax({
    method: 'POST',
    url: `${apiUrl}/sign-in`,
    data: credentials
  })
}

const ajaxUpdateAccount = updateData => {
  return $.ajax({
    method: 'PATCH',
    url: `${apiUrl}/users/${store.user._id}`,
    data: updateData,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
const ajaxChangePassword = passwords => {
  return $.ajax({
    method: 'PATCH',
    url: `${apiUrl}/change-password`,
    data: passwords,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}
const ajaxSignOut = () => {
  return $.ajax({
    method: 'DELETE',
    url: `${apiUrl}/sign-out`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  ajaxSignUp,
  ajaxSignIn,
  ajaxChangePassword,
  ajaxSignOut,
  ajaxUpdateAccount
}
