import React, { Component } from 'react'
import './css/search.css'
import { Icon } from 'semantic-ui-react'

class search extends Component {
  render () {
    return (
      <div className='search'>
        <div className='container'>
          <div className='row search-row'>
            <form>
              <input autoComplete='off' id='searchbar' type='text' placeholder='Search for anything Job/Applicant :)' name='search' />
              <Icon id='search-btn' name='search' size='large' color='black' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default search
