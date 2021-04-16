import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'
import fetch from 'cross-fetch'

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
        console.log("error", error)
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

export const requestRegister = (creds) => {
  return {
    type: ActionTypes.REGISTER_REQUEST,
    creds
  }
}

export const receiveRegister = (response) => {
  return {
    type: ActionTypes.REGISTER_SUCCESS,
    response
  }
}

export const registerError = (message) => {
  return {
    type: ActionTypes.REGISTER_FAILURE,
    message
  }
}

export const registerUser = (creds) => (dispatch) => {
  dispatch(requestRegister(creds))

  return fetch(baseUrl + 'user/register', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText)
        error.response = response
        throw error
      }
    },
    error => {
      throw error
    }
    )
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        dispatch(receiveRegister(response))
      } else {
        var error = new Error('Error ' + response.status)
        error.response = response
        return error
      }
    })
    .catch(err => dispatch(registerError(err.message)))
}

export const requestLogin = (creds) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    creds
  }
}

export const receiveLogin = (response) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token
  }
}

export const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message
  }
}

export const loginUser = (creds) => (dispatch) => {
  dispatch(requestLogin(creds))

  return fetch(baseUrl + 'user/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText)
        error.response = response
        throw error
      }
    },
    error => {
      throw error
    }
    )
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        localStorage.setItem('token', response.token)
        // localStorage.setItem('creds', JSON.stringify(creds))
        localStorage.setItem('isAdmin', response.admin)
        // console.log(response)
        // window.alert('Hello')
        dispatch(receiveLogin(response))
      } else {
        var error = new Error('Error ' + response.status)
        error.response = response
        return error
      }
    })
    .catch(err => dispatch(loginError(err.message)))
}

export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST
  }
}

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS
  }
}

export const logoutError = (message) => {
  return {
    type: ActionTypes.LOGOUT_FAILURE,
    message
  }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token')
  localStorage.removeItem('creds')
  dispatch(receiveLogout())
}
