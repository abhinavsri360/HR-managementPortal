import { createStore, applyMiddleware } from 'redux'
// import { Auth } from './auth'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

export const ConfigureStore = () => {
  const store = createStore(
    applyMiddleware(thunk)
    // applyMiddleware(thunk, logger)
  )
  return store
}
