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
      <div>
        <p>{props.applicant.name}</p>
      </div>
    )
  } else {
    return (
      <div />
    )
  }
}

export default ApplicantDetail
