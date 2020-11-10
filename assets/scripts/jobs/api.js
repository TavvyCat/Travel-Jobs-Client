'use strict'

const store = require('../store')
const apiUrl = require('./../config')

const ajaxPostJob = formData => {
    return $.ajax({
        method: 'POST',
        url: `${apiUrl}/jobs`,
        data: formData,
        headers: {
            Authorization: `Bearer ${store.user.token}`
        }
    })
}

const ajaxGetJobs = () => {
    return $.ajax({
        method: 'GET',
        url: `${apiUrl}/jobs`,
        headers: {
            Authorization: `Bearer ${store.user.token}`
        }
    })
}

const ajaxGetOneJob = id => {
    return $.ajax({
        method: 'GET',
        url: `${apiUrl}/jobs/${id}`,
        headers: {
            Authorization: `Bearer ${store.user.token}`
        }
    })
}

const ajaxUpdateJob = (formData) => {
    return $.ajax({
        method: 'PATCH',
        url: `${apiUrl}/jobs/${store.jobId}`,
        data: formData,
        headers: {
            Authorization: `Bearer ${store.user.token}`
        }
    })
}

const ajaxDeleteJob = () => {
    return $.ajax({
        method: 'DELETE',
        url: `${apiUrl}/jobs/${store.jobId}`,
        headers: {
            Authorization: `Bearer ${store.user.token}`
        }
    })
}

module.exports = {
    ajaxPostJob,
    ajaxGetJobs,
    ajaxGetOneJob,
    ajaxUpdateJob,
    ajaxDeleteJob
}