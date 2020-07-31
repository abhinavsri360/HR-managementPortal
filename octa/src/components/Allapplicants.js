import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/all.css'

function EachApplicant ({ applicant }) {
  return (
    <Card>
      <Link className='applicantCard' to={`/available_applicants/${applicant.applicantid}`}>
        <Card.Title>
          {applicant.name}
        </Card.Title>
        <Card.Text>Job Id: {applicant.jobid}
      Applicant Id: {applicant.applicantid}
      Notes: {applicant.notes}
        </Card.Text>
        <Card.Footer>Technologies: {applicant.technology.map((tech) => <p key={tech.id}>{tech.text}</p>)}</Card.Footer>
        <Card.Footer>Notice period: {applicant.notice}</Card.Footer>
        <Card.Footer>Salary: {applicant.salary}</Card.Footer>
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
