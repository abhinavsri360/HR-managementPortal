import React from 'react'
import Header from './components/header'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/store'
const store = ConfigureStore()

function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
      </HashRouter>
    </Provider>
  )
}

export default App
