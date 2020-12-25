import React from 'react'

const ApplicantDetail = (props) => {
  if (props.isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  } else if (props.applicant != null) {
    var stack = props.applicant.technology.map((tech) => tech.text + ', ')
    // console.log(stack)
    stack[stack.length - 1] = stack[stack.length - 1].slice(0, stack[stack.length - 1].length - 2)
    return (
      <div className='container'>
        <div className='col'>
          <div className='row'>
            <b>Name: </b>{props.applicant.name}
          </div>
          <div className='row'>
            <b>Job ID: </b>{props.applicant.jobid.substring(0, 6)}
          </div>
          <div className='row'>
            <b>Applicant ID: </b>{props.applicant.applicantid}
          </div>
          <div className='row'>
            <b>Notes: </b>{props.applicant.notes}
          </div>
          <div className='row'>
            <b>TechStack: </b>{stack}
          </div>
          <div className='row'>
            <b>Notice Period: </b>{props.applicant.notice}(months)
          </div>
          <div className='row'>
            <b>Salary Required: </b>Rs. {props.applicant.salary}
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
