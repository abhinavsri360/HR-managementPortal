import * as ActionTypes from './ActionTypes'

export const Jobs = (state = {
  isLoading: true,
  errMess: null,
  jobs: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_JOB:
      return { ...state, isLoading: false, errMess: null, jobs: action.payload }

    case ActionTypes.JOBS_LOADING:
      return { ...state, isLoading: true, errMess: null, jobs: [] }

    case ActionTypes.JOBS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload }

    default:
      return state
  }
}
