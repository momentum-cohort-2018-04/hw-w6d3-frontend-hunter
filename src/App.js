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
      .get(`https://api.unsplash.com/search/photos?client_id=${token}&count=10&query=${this.state.value}`)
      .then(response => {
        this.setState({
          searchArray: response.body.results
        })
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
        <div className='container'>
          <form onSubmit={this.photoSearch}>
            <div className='input-group'>
              <input type='text' id='search' onChange={this.handleChange} />
              <button type='sumbit' className='search-button'>Search</button>
            </div>
          </form>
          <div className='search-results'>
            {this.state.searchArray.map((pic, idx) => (
              <div key={idx} className='photo red'>
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
        <Modal isExpanded={this.state.isExpanded} src={pic.urls.regular} expand={this.expand} />
        <img src={pic.urls.thumb} alt='' onClick={this.expand} />
      </div>
    )
  }
}

class Modal extends Component {
  render () {
    let isExpanded = this.props.isExpanded
    let src = this.props.src
    let expand = this.props.expand
    if (isExpanded === true) {
      return (
        <div className='modal is-active'>
          <div className='modal-background' />
          <div className='modal-content'>
            <p className='image is-4by3'>
              <img src={src} alt='' />
            </p>
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
