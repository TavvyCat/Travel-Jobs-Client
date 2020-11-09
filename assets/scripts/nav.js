'use strict'

const { onSignUpForm, onSignInForm, onChangePasswordForm, onSignOutForm, onUpdateAccountForm } = require('./auth/events.js');
const store = require('./store.js');

const toHome = e => {
    e.preventDefault()
    // From https://jsfiddle.net/jWcLz/1/
    $('#main-content').fadeOut(500, function() {
        $(this).html(`<h1>Home Page</h1>`).fadeIn(500);
    });
}

const toSignUp = e => {
    e.preventDefault()    
    $('#main-content').fadeOut(500, function () {
        $(this).html(`
            <form class="col-12 row justify-content-center">
                <legend class="text-center display-3">Sign up here</legend>
                <div class="form-group col-12 d-block">
                    <label for="#type">Employer or Employee*</label>
                    <select id="type" class="form-control" name="user[type]" required>
                        <option value="">--Please choose an option--</option>
                        <option>Employee</option>
                        <option>Employer</option>
                    </select>
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#name">Name or Company Name*</label>
                    <input id="name" type="text" class="form-control" name="user[name]" placeholder="Your (Company) Name">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#email">Email Address*</label>
                    <input id="email" type="email" class="form-control" name="user[email]" placeholder="name@example.com">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#phone">Phone Number</label>
                    <input id="phone" type="tel" class="form-control" name="user[phone]" placeholder="(555)555-5555">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#occupation">Occupation</label>
                    <select id="occupation" class="form-control" name="user[occupation]" required>
                        <option value="">--Please choose an option--</option>
                        <option>PT</option>
                        <option>PTA</option>
                        <option>OT</option>
                        <option>COTA</option>
                        <option>SLP</option>
                        <option value="Employer">I am Employer</option>
                    </select>
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#password">Password*</label>
                    <input id="password" type="password" class="form-control" name="user[password]" placeholder="Your Password">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#pass-confirm">Password Confirmation*</label>
                    <input id="pass-confirm" type="password" class="form-control" name="user[password_confirmation]" placeholder="Your Password Again">
                </div>
                <input type="submit" class="btn btn-primary"/>
            </form>
        `).fadeIn(500, function () {
            $('form').on('submit', onSignUpForm)
        })
    })
}

const toSignIn = e => {
    e.preventDefault()

    $('#main-content').fadeOut(500, function () {
        $(this).html(`
        <form class="col-12 row justify-content-center">
            <legend class="text-center display-3">Sign In Here</legend>
            <div class="form-group col-12 d-block">
                <label for="#email">Email Address*</label>
                <input id="email" type="email" class="form-control" name="credentials[email]" placeholder="name@example.com">
            </div>
            <div class="form-group col-12 d-block">
                <label for="#password">Password*</label>
                <input id="password" type="password" class="form-control" name="credentials[password]" placeholder="Your Password">
            </div>
            <input type="submit" class="btn btn-primary"/>
        </form>
        `).fadeIn(500, function () {
            $('form').on('submit', onSignInForm)
        })
    })
}

const toSignOut = e => {
    e.preventDefault()

    $('#main-content').fadeOut(500, function () {
        $(this).html(`
            <form class="col-12 row justify-content-center">
                <h2>Are you sure you want to Logout?</h2>
                <input type="submit" class="btn btn-primary"/>
            </form>
        `).fadeIn(500, function () {
            $('form').on('submit', onSignOutForm)
        })
    })
}

const toAccount = e => {
    e.preventDefault()
    const user = store.user
    $('#main-content').fadeOut(500, function () {
        $(this).html(`
            <div id="account" class="card" style="width: 40rem;">
                <div class="card-body p-4">
                    <h2 class="card-title px-4 text-center">${user.name}</h3>
                    <h4 class="card-subtitle px-5 mb-5 text-center text-muted">${user.occupation}</h4>
                    <h3 class="px-4">Email:</h3>
                    <p class="card-text mb-5 px-4">${user.email}</p>
                    <h3 class="px-4">Phone:</h3>
                    <p class="card-text mb-5 px-4">${user.phone ? user.phone : 'N/A'}</p>
                    <div id="buttons" class="row justify-content-around ml-5">
                        <button id="update-account" class="btn btn-info">Update Info</button>
                        <button id="change-password" class="btn btn-warning">Change Password</button>
                    <div>
                </div>
            </div>
        `).fadeIn(500, function () {
            $('#update-account').on('click', toUpdateAccount)
            $('#change-password').on('click', toChangePassword)
        })
    })
}

const toChangePassword = () => {
    $('#main-content').fadeOut(250, function () {
        $(this).html(`
        <form class="col-12 row justify-content-center">
            <legend class="text-center display-3">Sign In Here</legend>
            <div class="form-group col-12 d-block">
                <label for="#old-pw">Old Password*</label>
                <input id="old-pw" type="password" class="form-control" name="passwords[old]" placeholder="Your Old Password">
            </div>
            <div class="form-group col-12 d-block">
                <label for="#new-pw">New Password*</label>
                <input id="new-pw" type="password" class="form-control" name="passwords[new]" placeholder="Your New Password">
            </div>
            <input type="submit" class="btn btn-primary"/>
        </form>
        `).fadeIn(250, function () {
            $('form').on('submit', onChangePasswordForm)
        })
    })
}

const toUpdateAccount = () => {
    const user = store.user
    $('#main-content').fadeOut(250, function () {
        $(this).html(`
            <form class="col-12 row justify-content-center">
                <legend class="text-center display-3">Sign up here</legend>
                <div class="form-group col-12 d-block">
                    <label for="#type">Employer or Employee*</label>
                    <select id="type" class="form-control" name="user[type]">
                        <option ${user.type === 'Employee' ? 'selected' : ''}>Employee</option>
                        <option ${user.type === 'Employer' ? 'selected' : ''}>Employer</option>
                    </select>
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#name">Name or Company Name*</label>
                    <input id="name" type="text" class="form-control" name="user[name]" value="${user.name}">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#email">Email Address*</label>
                    <input id="email" type="email" class="form-control" name="user[email]" value="${user.email}">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#phone">Phone Number</label>
                    <input id="phone" type="tel" class="form-control" name="user[phone]" value="${user.phone ? user.phone : ''}">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#occupation">Occupation</label>
                    <select id="occupation" class="form-control" name="user[occupation]">
                        <option ${user.occupation === 'PT' ? 'selected' : ''}>PT</option>
                        <option ${user.occupation === 'PTA' ? 'selected' : ''}>PTA</option>
                        <option ${user.occupation === 'OT' ? 'selected' : ''}>OT</option>
                        <option ${user.occupation === 'COTA' ? 'selected' : ''}>COTA</option>
                        <option ${user.occupation === 'SLP' ? 'selected' : ''}>SLP</option>
                        <option ${user.occupation === 'Employer' ? 'selected' : ''}>Employer</option>
                    </select>
                </div>
                <input type="submit" class="btn btn-primary"/>
            </form>
        `).fadeIn(250, function () {
            $('form').on('submit', onUpdateAccountForm)
        })
    })
}

const toPostJob = e => {
    e.preventDefault()

    $('#main-content').fadeOut(500, function () {
        $(this).html(`
            <form class="col-12 row justify-content-center">
                <legend class="text-center display-3">Sign up here</legend>
                <div class="form-group col-12 d-block">
                    <label for="#type">Employer or Employee*</label>
                    <select id="type" class="form-control" name="user[type]" required>
                        <option value="">--Please choose an option--</option>
                        <option>Employee</option>
                        <option>Employer</option>
                    </select>
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#name">Name or Company Name*</label>
                    <input id="name" type="text" class="form-control" name="user[name]" placeholder="Your (Company) Name">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#email">Email Address*</label>
                    <input id="email" type="email" class="form-control" name="user[email]" placeholder="name@example.com">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#phone">Phone Number</label>
                    <input id="phone" type="tel" class="form-control" name="user[phone]" placeholder="(555)555-5555">
                </div>
                <div class="form-group col-12 d-block">
                    <label for="#occupation">Occupation</label>
                    <select id="occupation" class="form-control" name="user[occupation]" required>
                        <option value="">--Please choose an option--</option>
                        <option>PT</option>
                        <option>PTA</option>
                        <option>OT</option>
                        <option>COTA</option>
                        <option>SLP</option>
                        <option value="Employer">I am Employer</option>
                    </select>
                </div>
                <input type="submit" class="btn btn-primary"/>
            </form>
        `)
    })
}

module.exports = {
    toHome,
    toSignUp,
    toSignIn,
    toSignOut,
    toAccount
}