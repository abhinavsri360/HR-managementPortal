import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

class navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  submitHandler = (e) =>{
    e.preventDefault()

    this.props.logoutUser()
  }
  render() {
  // console.log(this.props.isAuthenticated)
  if (this.props.isAuthenticated) {
    // console.log('Admin', this.props.isAdmin)
    return (
      <>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/home'>OctaPortal</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              { this.props.isAdmin.includes('true') ? (<Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/applicants'>View Applicants</Link>) : (<></>)}
              <Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/jobs'>View Jobs</Link>
            </Nav>
            <Nav className='ml-auto'>
              { this.props.isAdmin.includes('true') ? (<Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/post_job'>Create Job</Link>) : (<Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/apply'>Apply for Job</Link>)}
              <Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/' onClick={this.submitHandler}>Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  } else {
    return (
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Brand><Link style={{ textDecoration: 'inherit', color: 'inherit' }} to='/'>Signinup</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto' />
            <Nav>
              <Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/signin'>Signin</Link>
              <Link className='nav-link' style={{ textDecoration: 'inherit', color: '#fff' }} to='/signup'>Signup</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
}

export default navbar
