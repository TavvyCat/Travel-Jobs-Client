'use strict'

const store = require('../store')
const getFormFields = require('./../../../lib/get-form-fields')
const { ajaxPostJob, ajaxGetJobs, ajaxGetOneJob, ajaxUpdateJob, ajaxDeleteJob } = require('./api')
const { onPostJobSuccess, onGetJobsSuccess, onGetOneJobSuccess, onUpdateJobSuccess, onDeleteJobSuccess, onError } = require('./ui')

const onNewJobForm = e => {
  e.preventDefault()
  console.log(e)
  const formData = getFormFields(e.target)

  ajaxPostJob(formData)
    .then(onPostJobSuccess)
    .catch(onError)
}

const onGetJobs = e => {
  e.preventDefault()
  store.currentOccupation = $(e.target).data('occupation')

  ajaxGetJobs()
    .then(onGetJobsSuccess)
    .catch(onError)
}

const onGetOneJob = e => {
  const jobId = $(e.target).data('job-id')
  const actionType = e.target.classList[0]

  ajaxGetOneJob(jobId)
    .then(res => onGetOneJobSuccess(res, actionType))
    .catch(onError)
}

const onUpdateJobForm = e => {
  e.preventDefault()

  const formData = getFormFields(e.target)

  ajaxUpdateJob(formData)
    .then(onUpdateJobSuccess)
    .catch(onError)
}

const onDeleteJobForm = e => {
  e.preventDefault()

  ajaxDeleteJob()
    .then(onDeleteJobSuccess)
    .catch(onError)
}

module.exports = {
  onNewJobForm,
  onGetJobs,
  onGetOneJob,
  onUpdateJobForm,
  onDeleteJobForm
}
