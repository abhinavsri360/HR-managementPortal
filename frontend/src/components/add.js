import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { WithContext as ReactTags } from 'react-tag-input'
import './css/create.css'

const KeyCodes = {
  comma: 188,
  enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

class add extends Component {
  constructor (props) {
    super(props)

    this.state = {
      jobcode: '',
      applicantid: '',
      name: '',
      notes: '',
      notice: '',
      salary: '',
      link: '',
      tags: [],
      suggestions: [
        { id: 'English', text: 'English' },
        { id: 'React', text: 'React' },
        { id: 'Angular', text: 'Angular' },
        { id: 'Nodejs', text: 'Nodejs' },
        { id: 'MongoDB', text: 'MongoDB' },
        { id: 'C/C++', text: 'C/C++' },
        { id: 'Java', text: 'Java' },
        { id: 'Go', text: 'Go' },
        { id: 'Rust', text: 'Rust' },
        { id: 'Express', text: 'Express' }
      ]
    }
    this.onhandleAddition = this.onhandleAddition.bind(this)
    this.onhandleDelete = this.onhandleDelete.bind(this)
    this.onhandleDrag = this.onhandleDrag.bind(this)
  }

  handlechange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onhandleDelete (i) {
    const { tags } = this.state
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    })
  }

  onhandleAddition (tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }))
  }

  onhandleDrag (tag, currPos, newPos) {
    const tags = [...this.state.tags]
    const newTags = tags.slice()

    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    // re-render
    this.setState({ tags: newTags })
  }

  submitHandler (e) {
    e.preventDefault()
    // console.log(this.state)
    var applicant = {
      jobid: this.state.jobcode,
      applicantid: this.state.applicantid,
      name: this.state.name,
      notes: this.state.notes,
      technology: this.state.tags,
      notice: this.state.notice,
      salary: this.state.salary
    }
    this.props.postApplicant(applicant)
    window.location = '/home'
    window.reload()
  }

  componentDidMount () {
    this.setState({
      applicantid: this.props.applicants.applicants.length + 1
    })
  }

  render () {
    if (!this.props.isAuthenticated) {
      return (
        window.location = '/'
      )
    } else {
      if (this.props.isAdmin.includes('true')) {
        return (
          window.location = '/'
        )
      }
      const { jobcode, name, notes, tags, notice, salary, suggestions } = this.state
      return (
        <Container className='padme'>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Form onSubmit={(e) => this.submitHandler(e)}>
                <Form.Group controlId='formGroupJob'>
                  <Form.Label>JobCode:</Form.Label>
                  <Form.Control autoFocus autoComplete='off' required type='text' placeholder='Job Code' name='jobcode' value={jobcode} onChange={(e) => this.handlechange(e)} />
                </Form.Group>
                <Form.Group controlId='formGroupName'>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control minLength='5' maxLength='20' autoComplete='off' required type='name' placeholder='Name' name='name' value={name} onChange={(e) => this.handlechange(e)} />
                </Form.Group>
                <Form.Group controlId='formGroupNote'>
                  <Form.Label>Notes:</Form.Label>
                  <Form.Control as='textarea' autoComplete='off' rows='3' placeholder='Notes' name='notes' value={notes} onChange={(e) => this.handlechange(e)} />
                </Form.Group>
                <Form.Group controlId='formGroupTech'>
                  <Form.Label>Technologies</Form.Label>
                  <ReactTags
                    required
                    placeholder='Add Technology'
                    name='tech'
                    id='tech'
                    autofocus={false}
                    tags={tags}
                    suggestions={suggestions}
                    handleDelete={this.onhandleDelete}
                    handleAddition={this.onhandleAddition}
                    handleDrag={this.onhandleDrag}
                    delimiters={delimiters}
                  />
                </Form.Group>
                <Form.Group controlId='formGroupNotice'>
                  <Form.Label>Notice Period(in months):</Form.Label>
                  <Form.Control autoComplete='off' required type='number' placeholder='Notice Period' name='notice' value={notice} onChange={(e) => this.handlechange(e)} />
                </Form.Group>
                <Form.Group controlId='formGroupSalary'>
                  <Form.Label>Expected Salary:</Form.Label>
                  <Form.Control autoComplete='off' required type='number' placeholder='Expected Salary' name='salary' value={salary} onChange={(e) => this.handlechange(e)} />
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={{ span: 8, offset: 4 }}>
                    <Button type='submit' variant='dark'>Submit</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default add
