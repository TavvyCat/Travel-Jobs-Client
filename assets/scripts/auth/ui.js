'use strict'

const store = require('../store')

const onSignUpSuccess = res => {
  $('#message').text(`${res.user.name}, please sign in.`)
  $('#sign-in').trigger('click')
}

const onSignInSuccess = res => {
  store.user = res.user
  $('.not-auth').hide()
  $('.auth-only').show()
  $('#home').trigger('click')
  if (res.user.type === 'Employer') {
    $('.employer-only').show()
  }
  $('#message').text(`Hello, ${res.user.name}! You have successfully logged in.`)
  $('#main-content').html(store.home)
}

const onChangePasswordSuccess = () => {
  $('#message').text(`${store.user.name}, your password was changed.`)
  $('#account').trigger('click')
}

const onSignOutSuccess = res => {
  $('#message').text('Successfully signed out.')
  $('.not-auth').show()
  $('.auth-only').hide()
  $('.employer-only').hide()
  $('#home').trigger('click')
}

const onUpdateAccountSuccess = res => {
  store.user = res.user
  $('#message').text(`${store.user.name}, your account information has been updated.`)
  $('#account').trigger('click')
}

const onError = err => {
  $('#message').text(err.statusText)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onUpdateAccountSuccess,
  onError
}
