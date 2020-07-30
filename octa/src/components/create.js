import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { WithContext as ReactTags } from 'react-tag-input'
import './css/create.css'

const KeyCodes = {
  comma: 188,
  enter: 13
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

class create extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      tags: [
        { id: 'English', text: 'English' }
      ],
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

  handlechange = (e) => {
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

  render () {
    const { name, description, tags, suggestions } = this.state
    return (
      <Container className='padme'>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form>
              <Form.Group controlId='formGroupName'>
                <Form.Label>Name:</Form.Label>
                <Form.Control autoFocus required type='name' placeholder='Enter Name' name='name' value={name} onChange={this.handlechange} />
              </Form.Group>
              <Form.Group controlId='formGroupDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control required as='textarea' rows='3' placeholde='Description' name='description' value={description} onChange={this.handlechange} />
              </Form.Group>
              <Form.Group controlId='formGroupTech'>
                <Form.Label>Technologies</Form.Label>
                <ReactTags
                  required
                  placeholder='Add Technology'
                  name='tech'
                  id='tech'
                  tags={tags}
                  suggestions={suggestions}
                  handleDelete={this.onhandleDelete}
                  handleAddition={this.onhandleAddition}
                  handleDrag={this.onhandleDrag}
                  delimiters={delimiters}
                />
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 8, offset: 4 }}>
                  <Button type='submit' variant='dark'>Post</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default create
