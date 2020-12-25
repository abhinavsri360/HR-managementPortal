import React, { Component } from 'react'
import { Form, Button, Col, Row, Container, InputGroup } from 'react-bootstrap'
import swal from 'sweetalert'
import Loading from './loading'
// import axios from 'axios'

export class signup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      admin: true
    }
  }

  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) =>{
    e.preventDefault()

    var user = {
      username: this.state.username,
      password: this.state.password,
      admin: true
    }

    this.props.registerUser(user)
    .then( res => {
      if(typeof res === 'undefined'){
        window.location = '/signin'
      }
      else{
        swal({
          title: 'Creation error',
          text: 'There was error creating account',
          icon: 'error'
        })
        // window.alert('There was error creating account')
      }
    })
    // window.location = '/'
  }

  render () {
    if (this.props.isAuthenticated) {
      return (
        window.location = '/'
      )
    } else {
      if (!this.props.isLoading) {
        const { username, password, admin } = this.state
        // console.log('Admin', this.state.admin)
        return (
          <Container>
            <Row style={{ padding: 20 }}>
              <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={this.submitHandler}>
                  <Form.Group as={Row} controlId='formHorizontalName'>
                    <Form.Label column sm={2}>
      Username
                    </Form.Label>
                    <Col sm={10}>
                      <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control autoFocus minLength='3' maxLength='15' required autoComplete='off' type='name' name='username' placeholder='icognito' value={username} onChange={this.changeHandler} />
                      </InputGroup.Prepend>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId='formHorizontalPassword'>
                    <Form.Label column sm={2}>
      Password
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control type='password' minLength='8' required name='password' placeholder='******' value={password} onChange={this.changeHandler} />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId='formHorizontalRole'>
                    <Form.Label column sm={2}>
      Role
                    </Form.Label>
                    <Col sm={10}>
                      <div onChange={this.changeHandler} required value={admin} defaultChecked={this.state.admin}>
                        <input type='radio' checked value={true} name='admin' /> Job Creator
                        <input type='radio' value={false} name='admin' /> Job Getter
                      </div>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button type='submit' variant='dark'>Sign up</Button>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
        )
      } else {
        return (
          <Container>
            <Row style={{ padding: 200 }}>
              <Col md={{ span: 6, offset: 3 }}>
                <Loading />
              </Col>
            </Row>
          </Container>
        )
      }
    }
  }
}

export default signup
