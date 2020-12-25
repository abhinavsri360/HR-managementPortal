import React, { Component } from 'react'
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
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    this.props.fetchJobs()
    this.props.fetchApplicants()
  }

  render () {
    const JobWithId = ({ match }) => {
      return (
        <JobDetail
          job={this.props.jobs.jobs.filter((job) => job._id === match.params.jobId)[0]}
          isLoading={this.props.jobs.isLoading}
        />
      )
    }

    const ApplicantWithId = ({ match }) => {
      return (
        <ApplicantDetail
          applicant={this.props.applicants.applicants.filter((applicant) => applicant.applicantid === match.params.applicantId)[0]}
          isLoading={this.props.applicants.isLoading}
        />
      )
    }

    const AddApplicant = () => {
      return (
        <Add
          postApplicant={this.props.postApplicant}
          applicants={this.props.applicants}
        />
      )
    }

    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/home' component={Search} />
          <Route exact path='/available_jobs' component={() => <Alljobs jobs={this.props.jobs} />} />
          <Route path='/available_jobs/:jobId' component={JobWithId} />
          <Route exact path='/available_applicants' component={() => <Allapplicants applicants={this.props.applicants} />} />
          <Route path='/available_applicants/:applicantId' component={ApplicantWithId} />
          <Route path='/apply' component={AddApplicant} />
          <Route path='/post_job' component={() => <Create postJob={this.props.postJob} />} />
          <Route path='/404' component={PageNotFound} />
          <Redirect to='/home' />
        </Switch>
      </>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))
