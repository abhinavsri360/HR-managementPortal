import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/all.css'

function EachApplicant ({ applicant }) {
  return (
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
  )
}

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
    const applicants = props.applicants.applicants.map((applicant) => {
      return (
        <div key={applicant._id} className='col-12 col-md-3 m-1'>
          <EachApplicant applicant={applicant} />
        </div>
      )
    })
    return (
      <div className='container'>
        <div className='row'>
          {applicants}
        </div>
      </div>
    )
  }
}

export default Allapplicants
