'use strict'

const { ajaxSignUp, ajaxSignIn, ajaxUpdateAccount, ajaxChangePassword, ajaxSignOut } = require('./api')
const { onSignUpSuccess, onSignInSuccess, onChangePasswordSuccess, onError, onUpdateAccountSuccess, onSignOutSuccess } = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUpForm = e => {
    e.preventDefault()
    const formData = getFormFields(e.target)
    
    ajaxSignUp(formData)
        .then(onSignUpSuccess)
        .catch(onError)
}

const onSignInForm = e => {
    e.preventDefault()
    const formData = getFormFields(e.target)

    ajaxSignIn(formData)
        .then(onSignInSuccess)
        .catch(onError)
}

const onUpdateAccountForm = e => {
    e.preventDefault()
    const formData = getFormFields(e.target)

    ajaxUpdateAccount(formData)
        .then(onUpdateAccountSuccess)
        .catch(onError)
}

const onChangePasswordForm = e => {
    e.preventDefault()

    const formData = getFormFields(e.target)

    ajaxChangePassword(formData)
        .then(onChangePasswordSuccess)
}

const onSignOutForm = e => {
    e.preventDefault()

    ajaxSignOut()
        .then(onSignOutSuccess)
        .catch(onError)
}

module.exports = {
    onSignUpForm,
    onSignInForm,
    onChangePasswordForm,
    onSignOutForm,
    onUpdateAccountForm
}