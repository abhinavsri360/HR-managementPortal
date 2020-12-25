import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Jobs } from './Jobs'
import { Auth } from './auth'
import { Applicants } from './Applicants'
// import { Auth } from './auth'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: Auth,
      jobs: Jobs,
      applicants: Applicants
    }),
    applyMiddleware(thunk, logger)
  )
  return store
}
