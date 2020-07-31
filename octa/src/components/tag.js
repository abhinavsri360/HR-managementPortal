import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class tag extends Component {
  constructor (props) {
    super(props)

    this.state = {
      link: 'https://cors-anywhere.herokuapp.com/https://qrtag.net/api/qr.png?url=http://localhost:3000/available_applicants/' + this.props.tagnumber
    }
  }

  render () {
    return (
      <div className='container'>
        <h1>Here is your personalised application QR Code</h1>
        <div className='col'>
          <img crossOrigin='anonymous' src={this.state.link} alt='qrtag' /><br />
          <Button onClick={() => { window.location = '/' }}>Click to proceed</Button>
        </div>
      </div>
    )
  }
}

export default tag
