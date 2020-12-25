import React, { Component } from 'react'
import Signin from './signin'
import Signup from './signup'
import Navbar from './navbar'
import Search from './search'
import Add from './add'
import Create from './create'
import PageNotFound from './PageNotFound'
import Alljobs from './Alljobs'
import JobDetail from './jobDetail'
import ApplicantDetail from './applicantDetail'
import Allapplicants from './Allapplicants'
import { connect } from 'react-redux'
import { Switch, withRouter, Route, Redirect } from 'react-router-dom'
import { fetchJobs, fetchApplicants, postJob, postApplicant, registerUser, loginUser, logoutUser } from '../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    applicants: state.applicants,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  fetchJobs: () => { dispatch(fetchJobs()) },
  fetchApplicants: () => { dispatch(fetchApplicants()) },
  postJob: (job) => { dispatch(postJob(job)) },
  postApplicant: (applicant) => { dispatch(postApplicant(applicant)) },
  registerUser: (creds) => dispatch(registerUser(creds)),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser())
})

class header extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    this.props.fetchJobs()
    this.props.fetchApplicants()
  }

  render () {
    const SignupPage = () => {
      return (
        <Signup isAuthenticated={this.props.auth.isAuthenticated} isLoading={this.props.auth.isLoading} registerUser={this.props.registerUser} />
      )
    }
    const SigninPage = () => {
      return (
        <Signin isAuthenticated={this.props.auth.isAuthenticated} isLoading={this.props.auth.isLoading} loginUser={this.props.loginUser} />
      )
    }

    const JobWithId = ({ match }) => {
      return (
        <JobDetail
          isAuthenticated={this.props.auth.isAuthenticated}
          job={this.props.jobs.jobs.filter((job) => job._id === match.params.jobId)[0]}
          isLoading={this.props.jobs.isLoading}
        />
      )
    }

    const ApplicantWithId = ({ match }) => {
      return (
        <ApplicantDetail
          isAuthenticated={this.props.auth.isAuthenticated}
          applicant={this.props.applicants.applicants.filter((applicant) => applicant.applicantid === match.params.applicantId)[0]}
          isLoading={this.props.applicants.isLoading}
        />
      )
    }

    const AddApplicant = () => {
      return (
        <Add
          isAuthenticated={this.props.auth.isAuthenticated}
          postApplicant={this.props.postApplicant}
          applicants={this.props.applicants}
        />
      )
    }

    return (
      <>
        <Navbar isAuthenticated={this.props.auth.isAuthenticated} logoutUser={this.props.logoutUser} />
        <Switch>
          <Route path='/home' component={Search} />
          <Route path='/signin' component={SigninPage} />
          <Route path='/signup' component={SignupPage} />
          <Route exact path='/available_jobs' component={() => <Alljobs isAuthenticated={this.props.auth.isAuthenticated} jobs={this.props.jobs} />} />
          <Route path='/available_jobs/:jobId' component={JobWithId} />
          <Route exact path='/available_applicants' component={() => <Allapplicants isAuthenticated={this.props.auth.isAuthenticated} applicants={this.props.applicants} />} />
          <Route path='/available_applicants/:applicantId' component={ApplicantWithId} />
          <Route path='/apply' component={AddApplicant} />
          <Route path='/post_job' component={() => <Create isAuthenticated={this.props.auth.isAuthenticated} postJob={this.props.postJob} />} />
          <Route path='/404' component={PageNotFound} />
          <Redirect to='/home' />
        </Switch>
      </>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))
