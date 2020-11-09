'use strict'

const { toSignUp, toSignIn, toSignOut, toHome, toAccount } = require('./nav')

$(() => {
  $('.auth-only').hide()
  $('.employer-only').hide()

  // Navigate to views
  $('#home').on('click', toHome)
  $('.navbar-brand').on('click', toHome)
  $('#sign-up').on('click', toSignUp)
  $('#sign-in').on('click', toSignIn)
  $('#sign-out').on('click', toSignOut)
  $('#account').on('click', toAccount)
})