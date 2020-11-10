'use strict'

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
            <form id="sign-up-form" class="col-12 row justify-content-center">
                <legend class="text-center display-3">Sign Up Here</legend>
                <div class="form-group col-10 d-block">
                    <label for="#type">Employer or Employee*</label>
                    <select id="type" class="form-control" name="user[type]" required>
                        <option value="">--Please choose an option--</option>
                        <option>Employee</option>
                        <option>Employer</option>
                    </select>
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#name">Name or Company Name*</label>
                    <input id="name" type="text" class="form-control" name="user[name]" placeholder="Your (Company) Name">
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#email">Email Address*</label>
                    <input id="email" type="email" class="form-control" name="user[email]" placeholder="name@example.com">
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#phone">Phone Number</label>
                    <input id="phone" type="tel" class="form-control" name="user[phone]" placeholder="(555)555-5555">
                </div>
                <div class="form-group col-10 d-block">
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
                <div class="form-group col-10 d-block">
                    <label for="#password">Password*</label>
                    <input id="password" type="password" class="form-control" name="user[password]" placeholder="Your Password">
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#pass-confirm">Password Confirmation*</label>
                    <input id="pass-confirm" type="password" class="form-control" name="user[password_confirmation]" placeholder="Your Password Again">
                </div>
                <input type="submit" class="btn btn-primary col-3"/>
            </form>
        `).fadeIn(500)
    })
}

const toSignIn = e => {
    e.preventDefault()

    $('#main-content').fadeOut(500, function () {
        $(this).html(`
        <form id="sign-in-form" class="col-12 row justify-content-center">
            <legend class="text-center display-3">Sign In Here</legend>
            <div class="form-group col-10 d-block">
                <label for="#email">Email Address*</label>
                <input id="email" type="email" class="form-control" name="credentials[email]" placeholder="name@example.com">
            </div>
            <div class="form-group col-10 d-block">
                <label for="#password">Password*</label>
                <input id="password" type="password" class="form-control" name="credentials[password]" placeholder="Your Password">
            </div>
            <input type="submit" class="btn btn-primary col-3"/>
        </form>
        `).fadeIn(500)
    })
}

const toSignOut = e => {
    e.preventDefault()

    $('#main-content').fadeOut(500, function () {
        $(this).html(`
            <form id="sign-out-form" class="col-12 row justify-content-center">
                <legend>Are you sure you want to Logout?</legend>
                <input type="submit" class="btn btn-primary col-3"/>
            </form>
        `).fadeIn(500)
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
        <form id="change-password-form" class="col-12 row justify-content-center">
            <legend class="text-center display-3">Change Password</legend>
            <div class="form-group col-10 d-block">
                <label for="#old-pw">Old Password*</label>
                <input id="old-pw" type="password" class="form-control" name="passwords[old]" placeholder="Your Old Password">
            </div>
            <div class="form-group col-10 d-block">
                <label for="#new-pw">New Password*</label>
                <input id="new-pw" type="password" class="form-control" name="passwords[new]" placeholder="Your New Password">
            </div>
            <input type="submit" class="btn btn-primary col-3"/>
        </form>
        `).fadeIn(250)
    })
}

const toUpdateAccount = () => {
    const user = store.user
    $('#main-content').fadeOut(250, function () {
        $(this).html(`
            <form id="update-account-form" class="col-12 row justify-content-center">
                <legend class="text-center display-3">Update Info</legend>
                <div class="form-group col-10 d-block">
                    <label for="#type">Employer or Employee*</label>
                    <select id="type" class="form-control" name="user[type]">
                        <option ${user.type === 'Employee' ? 'selected' : ''}>Employee</option>
                        <option ${user.type === 'Employer' ? 'selected' : ''}>Employer</option>
                    </select>
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#name">Name or Company Name*</label>
                    <input id="name" type="text" class="form-control" name="user[name]" value="${user.name}">
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#email">Email Address*</label>
                    <input id="email" type="email" class="form-control" name="user[email]" value="${user.email}">
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#phone">Phone Number</label>
                    <input id="phone" type="tel" class="form-control" name="user[phone]" value="${user.phone ? user.phone : ''}">
                </div>
                <div class="form-group col-10 d-block">
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
                <input type="submit" class="btn btn-primary col-3"/>
            </form>
        `).fadeIn(250)
    })
}

const toNewJob = e => {

    $('#main-content').fadeOut(500, function () {
        $(this).html(`
            <form id="new-job-form" class="col-12 row justify-content-center">
                <legend class="text-center display-3">New Job</legend>
                <div class="form-group col-10 d-block">
                    <label for="#occupation">Occupation</label>
                    <select id="occupation" class="form-control" name="job[occupation]" required>
                        <option selected value="">--Please choose an option--</option>
                        <option>PT</option>
                        <option>PTA</option>
                        <option>OT</option>
                        <option>COTA</option>
                        <option>SLP</option>
                    </select>
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#type">Type of Job</label>
                    <select id="type" class="form-control" name="job[type]" required>
                        <option selected value="">--Please choose an option--</option>
                        <option>Outpatient</option>
                        <option>Inpatient</option>
                        <option>Acute</option>
                        <option>Home Health</option>
                        <option>SNF</option>
                    </select>
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#pay">Pay per Week*</label>
                    <input id="pay" type="number" class="form-control" name="job[pay]" min=0 step=5 required>
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#location">Location*</label>
                    <input id="location" type="text" class="form-control" name="job[location]" placeholder="City, State" required>
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#description">Description</label>
                    <textarea id="description" class="form-control" name="job[description]" placeholder="Tell us about the job" required></textarea>
                </div>
                
                <input type="submit" class="btn btn-primary col-3"/>
            </form>
        `).fadeIn(500)
    })
}

const getDays = postDate => {
    return Math.floor((new Date().getTime() - new Date(postDate.slice(0, 10)).getTime()) / (1000 * 3600 * 24))
}

const toJobs = res => {
    let filteredJobs = res.jobs
    if (store.currentOccupation) {
        filteredJobs = filteredJobs.filter(job => job.occupation === store.currentOccupation)
    }
    $('#main-content').fadeOut(500, function () {
        $(this).html("")
        filteredJobs.forEach(job => {
            const daysAgo = getDays(job.createdAt)
            $(this).append(`
                <div class="card col-sm-6 col-12 text-center job">
                    <div class="card-header">${job.owner.name}</div>
                    <div class="card-body">
                        <h5 class="card-title">${job.occupation} in ${job.location}</h5>
                        <p class="card-text">$${job.pay} per Week</p>
                        <p class="card-text">${job.type}</p>
                        <p class="card-text">${job.description}</p>
                        ${store.user.type === 'employee' ? `
                            <button class="btn btn-primary apply">Apply Now</button>
                        ` : ""}
                        ${store.user._id === job.owner._id ? `
                        <button class="update btn btn-info" data-job-id=${job._id}>Edit Job</button>
                        <button class="delete btn btn-danger" data-job-id=${job._id}>Delete Job</button>
                        ` : ""}
                    </div>
                    <div class="card-footer text-muted">
                        Posted ${daysAgo === 0 ? 'today' : daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`}
                    </div>
                </div>
            `)
        })
        $(this).fadeIn(500)
    })
}

const toUpdateJob = job => {
    $('#main-content').fadeOut(250, function () {
        $(this).html(`
            <form id="update-job-form" class="col-12 row justify-content-center">
                <legend class="text-center display-3">Update Job</legend>
                <div class="form-group col-10 d-block">
                    <label for="#occupation">Occupation</label>
                    <select id="occupation" class="form-control" name="job[occupation]" required>
                        <option ${job.occupation === 'PT' ? 'selected' : ''}>PT</option>
                        <option ${job.occupation === 'PTA' ? 'selected' : ''}>PTA</option>
                        <option ${job.occupation === 'OT' ? 'selected' : ''}>OT</option>
                        <option ${job.occupation === 'COTA' ? 'selected' : ''}>COTA</option>
                        <option ${job.occupation === 'SLP' ? 'selected' : ''}>SLP</option>
                    </select>
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#type">Type of Job</label>
                    <select id="type" class="form-control" name="job[type]" required>
                        <option ${job.occupation === 'Outpatient' ? 'selected' : ''}>Outpatient</option>
                        <option ${job.occupation === 'Inpatient' ? 'selected' : ''}>Inpatient</option>
                        <option ${job.occupation === 'Acute' ? 'selected' : ''}>Acute</option>
                        <option ${job.occupation === 'Home Health' ? 'selected' : ''}>Home Health</option>
                        <option ${job.occupation === 'SNF' ? 'selected' : ''}>SNF</option>
                    </select>
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#pay">Pay per Week*</label>
                    <input id="pay" type="number" class="form-control" name="job[pay]" min=0 step=5 value="${job.pay}">
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#location">Location*</label>
                    <input id="location" type="text" class="form-control" name="job[location]" value="${job.location}">
                </div>
                <div class="form-group col-10 d-block">
                    <label for="#description">Description</label>
                    <textarea id="description" class="form-control" name="job[description]"required>${job.description}</textarea>
                </div>
                
                <input type="submit" class="btn btn-primary col-3"/>
            </form>
        `).fadeIn(250)
    })
}

const toDeleteJob = job => {
    const daysAgo = getDays(job.createdAt)
    $('#main-content').fadeOut(250, function () {
        $(this).html(`
        <div class="card col-sm-6 col-12 text-center job">
        <div class="card-header">Are you sure you want to delete this job?</div>
        <div class="card-body">
            <h5 class="card-title">${job.occupation} in ${job.location}</h5>
            <p class="card-text">$${job.pay} per Week</p>
            <p class="card-text">${job.type}</p>
            <p class="card-text">${job.description}</p>
            <form id="delete-job-form">
                <input type="submit" class="btn btn-danger">Delete</input
            </form>
        </div>
        <div class="card-footer text-muted">
            Posted ${daysAgo === 0 ? 'today' : daysAgo === 1 ? '1 day ago' : `${daysAgo} days ago`}
        </div>
    </div>
        `).fadeIn(250)
    })
}

module.exports = {
    toHome,
    toSignUp,
    toSignIn,
    toSignOut,
    toAccount,
    toNewJob,
    toJobs,
    toUpdateAccount,
    toChangePassword,
    toUpdateJob,
    toDeleteJob
}