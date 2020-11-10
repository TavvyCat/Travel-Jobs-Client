'use strict'

const { onUpdateAccountForm, onChangePasswordForm, onSignUpForm, onSignInForm, onSignOutForm } = require('./auth/events')
const { onGetJobs, onNewJobForm, onGetOneJob, onUpdateJobForm, onDeleteJobForm } = require('./jobs/events')
const { toSignUp, toSignIn, toSignOut, toHome, toAccount, toNewJob, toUpdateAccount, toChangePassword } = require('./nav')

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
  
  // jobs listeners
  $('#new-job').on('click', toNewJob)
  $('.jobs').on('click', onGetJobs)
  $('#main-content').on('click', '.update', onGetOneJob)
  $('#main-content').on('click', '.delete', onGetOneJob)
  $('#main-content').on('submit', '#update-job-form', onUpdateJobForm)
  $('#main-content').on('submit', '#delete-job-form', onDeleteJobForm)

  // nav listeners
  $('#main-content').on('submit', '#sign-up-form', onSignUpForm)
  $('#main-content').on('submit', '#sign-in-form', onSignInForm)
  $('#main-content').on('submit', '#sign-out-form', onSignOutForm)
  $('#main-content').on('submit', '#update-account-form', onUpdateAccountForm)
  $('#main-content').on('submit', '#change-password-form', onChangePasswordForm)
  $('#main-content').on('submit', '#new-job-form', onNewJobForm)

  // account listeners
  $('#account').on('click', '#update-account', toUpdateAccount)
  $('#account').on('click', '#change-password', toChangePassword)
})