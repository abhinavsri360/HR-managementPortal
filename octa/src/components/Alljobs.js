import React from 'react'
import { Card } from 'react-bootstrap'

function EachJob ({ job }) {
  return (
    <Card>
      <Card.Title>
        {job.name}
      </Card.Title>
      <Card.Text>{job.description}</Card.Text>
      <Card.Footer>{job.technology[0].text}</Card.Footer>
    </Card>
  )
}

const Alljobs = (props) => {
  const jobs = props.jobs.jobs.map((job) => {
    return (
      <div key={job.id} className='col-12 col-md-3 m-1'>
        <EachJob job={job} />
      </div>
    )
  })
  if (props.jobs.isLoading) {
    return (
      <p>Loading...</p>
    )
  } else if (props.jobs.errMess) {
    return (
      <p>Error in Loading</p>
    )
  } else {
    return (
      <div className='container'>
        <div className='row'>
          {jobs}
        </div>
      </div>
    )
  }
}

export default Alljobs
