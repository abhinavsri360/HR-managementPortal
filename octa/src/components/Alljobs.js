import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/all.css'

function EachJob ({ job }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Link className='noDecoration' to={`/available_jobs/${job._id}`}>
        <Card.Body>
          <Card.Title>{job.name}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>Description</Card.Subtitle>
          <Card.Text>
            {job.description}
          </Card.Text>
          <Card.Subtitle>TechStack Required</Card.Subtitle>
          <Card.Text>{job.technology.map((tech) => <p key={tech.id}>{tech.text}</p>)}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

const Alljobs = (props) => {
  const jobs = props.jobs.jobs.map((job) => {
    return (
      <div key={job._id} className='col-12 col-md-3 m-1'>
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
