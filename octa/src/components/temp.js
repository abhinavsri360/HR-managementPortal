import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/all.css'
import { Input } from 'semantic-ui-react'

const Allapplicants = (props) => {
  if (props.applicants.isLoading) {
    return (
      <p>Loading...</p>
    )
  } else if (props.applicants.errMess) {
    return (
      <p>Error in Loading</p>
    )
  } else {
    return (
      <Allapp allapplicants={props.applicants.applicants} />
    )
  }
}

class Allapp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      search: ''
    }
  }

  handlechange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    var applicants = this.props.allapplicants.map((applicant) => {
      return (
        <div key={applicant._id} className='col-12 col-md-3 m-1'>
          <Card style={{ width: '18rem' }} className={'Name: ' + applicant.name + ' Technology: ' + applicant.technology.map((tech) => tech.text) + ' Notice: ' + applicant.notice + ' Salary: ' + applicant.salary}>
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
      <div className='container'>
        <Input className='col-md-10' style={{ padding: '20px' }} name='search' onChange={(e) => this.handlechange(e)} label='Search applicant' icon='search' />
        <div className='row'>
          {applicants}
        </div>
      </div>
    )
  }
}

export default Allapplicants
