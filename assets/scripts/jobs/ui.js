'use strict'

const store = require('./../store')
const { toJobs, toUpdateJob, toDeleteJob } = require('./../nav')

const onPostJobSuccess = res => {
  $('#message').text('Your Job Was Successfully Posted!')
  $('#home').trigger('click')
}

const onGetJobsSuccess = res => {
  toJobs(res)
}

const onGetOneJobSuccess = (res, actionType) => {
  store.jobId = res.job._id
  if (actionType === 'update') {
    toUpdateJob(res.job)
  } else if (actionType === 'delete') {
    toDeleteJob(res.job)
  }
}

const onUpdateJobSuccess = () => {
  $('#message').text('Your Job Was Successfully Updated!')
  $('#all-jobs').trigger('click')
}

const onDeleteJobSuccess = () => {
  $('#message').text('Your Job Was Successfully Deleted!')
  $('#all-jobs').trigger('click')
}

const onError = err => {
  $('#message').text(err.statusText)
}

module.exports = {
  onPostJobSuccess,
  onGetJobsSuccess,
  onGetOneJobSuccess,
  onUpdateJobSuccess,
  onDeleteJobSuccess,
  onError
}
