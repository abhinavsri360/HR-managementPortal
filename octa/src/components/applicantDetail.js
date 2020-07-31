import React from 'react'

const ApplicantDetail = (props) => {
  if (props.isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  } else if (props.applicant != null) {
    return (
      <div className='container'>
        <div className='col'>
          <div className='row'>
            <b>Name: </b>{props.applicant.name}
          </div>
          <div className='row'>
            <b>Job ID: </b>{props.applicant.jobid}
          </div>
          <div className='row'>
            <b>Applicant ID: </b>{props.applicant.applicantid}
          </div>
          <div className='row'>
            <b>Notes: </b>{props.applicant.notes}
          </div>
          <div className='row'>
            <b>TechStack: </b>{props.applicant.technology.map((tech) => <p key={tech.id}>{tech.text}</p>)}
          </div>
          <div className='row'>
            <b>Notice Period: </b>{props.applicant.notice}
          </div>
          <div className='row'>
            <b>Salary Required: </b>{props.applicant.salary}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div />
    )
  }
}

export default ApplicantDetail
