import React from 'react'

const JobDetail = (props) => {
  if (props.job != null) {
    return (
      <div>
        <p>{props.job.name}</p>
      </div>
    )
  } else {
    return (
      <div />
    )
  }
}

export default JobDetail
