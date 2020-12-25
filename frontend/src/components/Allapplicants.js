import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/all.css'
import { Input } from 'semantic-ui-react'

class SearchedApplicants extends Component {
  render () {
    var applicants = this.props.allapplicants.map((applicant) => {
      return (
        <div key={applicant._id} className='col-12 col-md-3 m-1'>
          <Card style={{ width: '18rem' }}>
            <Link className='noDecoration' to={`/available_applicants/${applicant.applicantid}`}>
              <Card.Body>
                <Card.Title>{applicant.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'><b>JobID:</b>{applicant.jobid.substring(0, 6)}</Card.Subtitle>
                <Card.Footer style={{ backgroundColor: 'white' }}>Notice period(months): {applicant.notice}</Card.Footer>
                <Card.Footer style={{ backgroundColor: 'white' }}>Salary: Rs. {applicant.salary}</Card.Footer>
              </Card.Body>
            </Link>
          </Card>
        </div>
      )
    })
    return (
      <>
        {applicants}
      </>
    )
  }
}

class AllApplicants extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: '',
      allapplicants: []
    }
  }

  handlechange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount () {
    this.setState({
      allapplicants: this.props.applicants.applicants
    })
  }

  dynamicSearch = () => {
    return this.state.allapplicants.filter(applicant => JSON.stringify(applicant).toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render () {
    if (this.props.applicants.isLoading) {
      return (
        <p>Loading...</p>
      )
    } else if (this.props.applicants.errMess) {
      return (
        <h4>Try again Later</h4>
      )
    } else {
      return (
        <div className='container'>
          <Input className='col-md-10' placeholder='Anything...' style={{ padding: '20px' }} name='search' onChange={(e) => this.handlechange(e)} label='Search by' />
          <div className='row'>
            <SearchedApplicants allapplicants={this.dynamicSearch()} />
          </div>
        </div>
      )
    }
  }
}

export default AllApplicants
