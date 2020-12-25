import React from 'react'

const JobDetail = (props) => {
  if (props.isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  } else if (props.job != null) {
    var stack = props.job.technology.map((tech) => tech.text + ', ')
    // console.log(stack)
    stack[stack.length - 1] = stack[stack.length - 1].slice(0, stack[stack.length - 1].length - 2)
    return (
      <div className='container'>
        <div className='col'>
          <div className='row'>
            <h1 style={{ paddingTop: '5px', paddingBottom: '5px' }}><b>{props.job.name}</b></h1>
          </div>
          <div className='row'>
            <b>Job Id: </b>{props.job._id.substring(0, 6)}
          </div>
          <div className='row'>
            <b>Description: </b>{props.job.description}
          </div>
          <div className='row'>
            <b>TechStack: </b>{stack}
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
