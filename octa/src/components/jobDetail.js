import React from 'react'

const JobDetail = (props) => {
  if (props.isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  } else if (props.job != null) {
    return (
      <div className='container'>
        <div className='col'>
          <div className='row'>
            <b>Name: </b>{props.job.name}
          </div>
          <div className='row'>
            <b>Description: </b>{props.job.description}
          </div>
          <div className='row'>
            <b>TechStack: </b>{props.job.technology.map((tech) => <p key={tech.id}>{tech.text}</p>)}
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

export default JobDetail
