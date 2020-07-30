import React from 'react'
import { Card } from 'react-bootstrap'

function EachApplicant ({ applicant }) {
  return (
    <Card>
      <Card.Title>
        {applicant.name}
      </Card.Title>
      <Card.Text>Job Id: {applicant.jobid}
      Applicant Id: {applicant.applicantid}
      Notes: {applicant.notes}
      </Card.Text>
      <Card.Footer>Major Tech: {applicant.technology[0].text}</Card.Footer>
      <Card.Footer>Notice period: {applicant.notice}</Card.Footer>
      <Card.Footer>Salary: {applicant.salary}</Card.Footer>
    </Card>
  )
}

const Allapplicants = (props) => {
  const applicants = props.applicants.applicants.map((applicant) => {
    return (
      <div key={applicant.id} className='col-12 col-md-3 m-1'>
        <EachApplicant applicant={applicant} />
      </div>
    )
  })
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
      <div className='container'>
        <div className='row'>
          {applicants}
        </div>
      </div>
    )
  }
}

export default Allapplicants
