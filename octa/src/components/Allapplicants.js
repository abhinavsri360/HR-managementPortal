import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/all.css'
import { Input } from 'semantic-ui-react'

class SearchedApplicants extends Component {
  render() {
    var applicants = this.props.allapplicants.map((applicant) => {
      return (
        <div key={applicant._id} className='col-12 col-md-3 m-1'>
          <Card style={{ width: '18rem' }}>
            <Link className='noDecoration' to={`/available_applicants/${applicant.applicantid}`}>
              <Card.Body>
                <Card.Title>{applicant.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'><b>JobID:</b>{applicant.jobid}</Card.Subtitle>
                <Card.Subtitle>TechStack:</Card.Subtitle>
                <ListGroup.Item>{applicant.technology.map((tech) => <p key={tech.id}>{tech.text}</p>)}</ListGroup.Item>
                <Card.Footer style={{ backgroundColor: 'white' }}>Notice period: {applicant.notice}</Card.Footer>
                <Card.Footer style={{ backgroundColor: 'white' }}>Salary: {applicant.salary}</Card.Footer>
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
  constructor(props) {
    super(props)
  
    this.state = {
       search: '',
       allapplicants: []
    }
  }

  handlechange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount(){
    this.setState({
      allapplicants: this.props.applicants.applicants
    })
  }

  dynamicSearch = () => {
    return this.state.allapplicants.filter(applicant => JSON.stringify(applicant).toLowerCase().includes(this.state.search.toLowerCase()))
  }
  
  render() {
    if (this.props.applicants.isLoading) {
      return (
        <p>Loading...</p>
      )
    } else if (this.props.applicants.errMess) {
      return (
        <p>Error in Loading</p>
      )
    } else {
      return (
        <div className='container'>
          <Input className='col-md-10' placeholder='Anything...' style={{ padding: '20px' }} name='search' onChange={(e) => this.handlechange(e)} label='Search by' icon='search' />
          <div className='row'>
            <SearchedApplicants allapplicants={this.dynamicSearch()} />
          </div>
        </div>
      )
    }
  }
}

export default AllApplicants
