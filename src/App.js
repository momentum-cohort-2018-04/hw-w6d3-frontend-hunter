import React, { Component } from 'react'
import './App.css'
import request from 'superagent'
import {} from 'dotenv/config'
import Photo from './Photo'

const token = process.env.REACT_APP_UNSPLASH_KEY

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      searchArray: []
    }
    this.photoSearch = this.photoSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  photoSearch (e) {
    e.preventDefault()
    request
      .get(`https://api.unsplash.com/search/photos?client_id=${token}&per_page=30&query=${this.state.value}`)
      .then(response => {
        this.setState({
          searchArray: response.body.results
        })
        const field = document.querySelector('.input-group')
        const error = document.querySelector('.error')
        if (this.state.searchArray.length === 0) {
          field.classList.add('input-invalid')
          error.classList.remove('hidden')
        } else {
          field.classList.remove('input-invalid')
          error.classList.add('hidden')
        }
      })
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    return (
      <div className='App'>
        <header className='header'>
          <h1 className='header__title'>Photo Search</h1>
        </header>
        <div className='container'>
          <form onSubmit={this.photoSearch}>
            <div className='input-group'>
              <input type='text' id='search' onChange={this.handleChange} placeholder='Search for photos...' />
              <button type='sumbit' className='search-button button-secondary'>Search</button>
            </div>
          </form>
          <h2 className='text-danger hidden error'>No results. Please search for something else.</h2>
          <div className='search-results'>
            {this.state.searchArray.map((pic, idx) => (
              <div key={idx} className='photo'>
                <Photo pic={pic} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
