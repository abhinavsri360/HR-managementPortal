import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'
// import fetch from 'cross-fetch'

export const jobsLoading = () => ({
  type: ActionTypes.JOBS_LOADING
})

export const jobsFailed = (errmess) => ({
  type: ActionTypes.JOBS_FAILED,
  payload: errmess
})

export const addjobs = (job) => ({
  type: ActionTypes.ADD_JOB,
  payload: job
})

export const fetchJobs = () => (dispatch) => {
  dispatch(jobsLoading(true))

  return fetch(baseUrl + 'job')
    .then((res) => {
      if (res.ok) {
        return res
      } else {
        var error = new Error('Error ' + res.status + ': ' + res.statusText)
        error.response = res
        throw error
      }
    }, err => {
      var errmess = new Error(err.message)
      throw errmess
    })
    .then(res => res.json())
    .then(jobs => dispatch(addjobs(jobs)))
    .catch(error => dispatch(jobsFailed(error.message)))
}

export const postJob = (job) => (dispatch) => {
  dispatch(jobsLoading(true))

  return fetch(baseUrl + 'job', {
    method: 'POST',
    body: JSON.stringify(job),
    headers: {
      'Content-type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error('Error ' + res.status + ': ' + res.statusText)
        error.response = res
        throw error
      }
    }, error => {
      throw error
    })
    .then(res => res.json())
    .then(res => dispatch(addjobs(res)))
    .catch(error => {
      console.log('post jobs', error.message)
      window.alert('Your job could not be posted\nError: ' + error.message)
    })
}

export const applicantsLoading = () => ({
  type: ActionTypes.APPLICANTS_LOADING
})

export const applicantsFailed = (errmess) => ({
  type: ActionTypes.APPLICANTS_FAILED,
  payload: errmess
})

export const addapplicants = (applicant) => ({
  type: ActionTypes.ADD_APPLICANT,
  payload: applicant
})

export const fetchApplicants = () => (dispatch) => {
  dispatch(applicantsLoading(true))

  return fetch(baseUrl + 'applicant')
    .then((res) => {
      if (res.ok) {
        return res
      } else {
        var error = new Error('Error ' + res.status + ': ' + res.statusText)
        error.response = res
        throw error
      }
    }, err => {
      var errmess = new Error(err.message)
      throw errmess
    })
    .then(res => res.json())
    .then(applicants => dispatch(addapplicants(applicants)))
    .catch(error => dispatch(applicantsFailed(error.message)))
}

export const postApplicant = (applicant) => (dispatch) => {
  dispatch(applicantsLoading(true))

  return fetch(baseUrl + 'applicant', {
    method: 'POST',
    body: JSON.stringify(applicant),
    headers: {
      'Content-type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error('Error ' + res.status + ': ' + res.statusText)
        error.response = res
        throw error
      }
    }, error => {
      throw error
    })
    .then(res => res.json())
    .then(res => dispatch(addapplicants(res)))
    .catch(error => {
      console.log('post applicants', error.message)
      window.alert('Your application could not be posted\nError: ' + error.message)
    })
}
