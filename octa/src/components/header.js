import React from 'react'
import Navbar from './navbar'
import Search from './search'
import Add from './add'
import Create from './create'
import PageNotFound from './PageNotFound'
import { Switch, Route, Redirect } from 'react-router-dom'

function header () {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' component={Search} exact />
        <Route path='/apply' component={Add} />
        <Route path='/post_job' component={Create} />
        <Route path='/404' component={PageNotFound} />
        <Redirect to='/404' />
      </Switch>
    </>
  )
}

export default header
