import React, { Component } from 'react'
import './App.css'
import request from 'superagent'
import {} from 'dotenv/config'

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
        console.log(this.state.searchArray)
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
    e.preventDefault()
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

class Photo extends Component {
  constructor () {
    super()
    this.state = {
      isExpanded: false
    }
    this.expand = this.expand.bind(this)
  }

  expand () {
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render () {
    let pic = this.props.pic
    return (
      <div>
        <Modal isExpanded={this.state.isExpanded} pic={pic} expand={this.expand} />
        <img className='thumb' src={pic.urls.thumb} alt='' onClick={this.expand} />
      </div>
    )
  }
}

class Modal extends Component {
  render () {
    let isExpanded = this.props.isExpanded
    let pic = this.props.pic
    let expand = this.props.expand
    if (isExpanded === true) {
      return (
        <div className='modal is-active'>
          <div className='modal-background' />
          <div className='modal-content'>
            <p className='image is-4by3'>
              <img src={pic.urls.regular} alt='' />
            </p>
            <div className='info'>
              <h2 className='info__artist'>Artist: {pic.user.name}</h2>
              <h2 className='info__portfolio'><a href={pic.user.portfolio_url} target='_blank'>View Portfolio</a></h2>
              <h2 className='info__twitter'><a href={'https://www.twitter.com/' + pic.user.twitter_username} target='_blank'>View Twitter</a></h2>
              <h2 className='info__instagram'><a href={'https://www.instagram.com/' + pic.user.instagram_username} target='_blank'>View Instagram</a></h2>
            </div>
          </div>
          <button className='modal-close is-large' aria-label='close' onClick={expand} />
        </div>
      )
    } else {
      return null
    }
  }
}

export default App
