import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'
import fetch from 'cross-fetch'

export const jobRegister = (creds) => {
  return {
    type: ActionTypes.JOB_REGISTER,
    creds
  }
}

export const jobSuccess = (response) => {
  return {
    type: ActionTypes.JOB_SUCCESS,
    response
  }
}

export const jobFailure = (message) => {
  return {
    type: ActionTypes.JOB_FAILURE,
    message
  }
}

export const registerJob = (creds) => (dispatch) => {
  dispatch(jobRegister(creds))

  return fetch(baseUrl + 'job', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error('Error ' + res.status + ': ' + res.statusText)
        error.response = res
        throw error
      }
    },
    error => {
      throw error
    }
    )
    .then(res => res.json())
    .then(res => {
      if (res.success) {
        dispatch(jobSuccess(res))
      } else {
        var error = new Error('Error ' + res.status)
        error.response = res
        return error
      }
    })
    .catch(err => dispatch(jobFailure(err.message)))
}
