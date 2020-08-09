import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

function navbar () {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/home'>OctaPortal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/available_jobs'>View Jobs</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/available_applicants'>View Applicants</Link></Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/post_job'>Create Job</Link></Nav.Link>
            <Nav.Link><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/apply'>Apply for Job</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default navbar
