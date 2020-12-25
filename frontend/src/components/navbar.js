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
            <Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/available_jobs'>View Jobs</Link>
            <Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/available_applicants'>View Applicants</Link>
          </Nav>
          <Nav className='ml-auto'>
            <Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/post_job'>Create Job</Link>
            <Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/apply'>Apply for Job</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default navbar
