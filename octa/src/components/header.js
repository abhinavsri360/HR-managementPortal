import React, { Component } from 'react'
import Navbar from './navbar'
import Search from './search'
import Add from './add'
import Create from './create'
import PageNotFound from './PageNotFound'
import Alljobs from './Alljobs'
import Allapplicants from './Allapplicants'
import { connect } from 'react-redux'
import { Switch, withRouter, Route, Redirect } from 'react-router-dom'
import { fetchJobs, fetchApplicants, postJob, postApplicant } from '../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    applicants: state.applicants
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => { dispatch(fetchJobs()) },
  fetchApplicants: () => { dispatch(fetchApplicants()) },
  postJob: (job) => { dispatch(postJob(job)) },
  postApplicant: (applicant) => { dispatch(postApplicant(applicant)) }
})

class header extends Component {
  componentDidMount () {
    this.props.fetchJobs()
    this.props.fetchApplicants()
  }

  render () {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' component={Search} exact />
          <Route path='/available_jobs' component={() => <Alljobs jobs={this.props.jobs} />} />
          <Route path='/available_applicants' component={() => <Allapplicants applicants={this.props.applicants} />} />
          <Route path='/apply' component={Add} />
          <Route path='/post_job' component={() => <Create postJob={(job) => this.props.postJob(job)} />} />
          <Route path='/404' component={PageNotFound} />
          <Redirect to='/404' />
        </Switch>
      </>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))
