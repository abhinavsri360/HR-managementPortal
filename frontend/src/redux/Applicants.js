import * as ActionTypes from './ActionTypes'

export const Applicants = (state = {
  isLoading: true,
  errMess: null,
  applicants: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_APPLICANT:
      return { ...state, isLoading: false, errMess: null, applicants: action.payload }

    case ActionTypes.APPLICANTS_LOADING:
      return { ...state, isLoading: true, errMess: null, applicants: [] }

    case ActionTypes.APPLICANTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload }

    default:
      return state
  }
}
