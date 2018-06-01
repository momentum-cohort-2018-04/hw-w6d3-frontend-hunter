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
              <Photo pic={pic} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

class Photo extends Component {
  render () {
    let pic = this.props.pic
    let idx = this.props.idx
    return (
      <div>
        <div className='photo' key={idx}>
          <img src={pic.urls.thumb} />
        </div>
      </div>
    )
  }
}

// class Form extends Component {
//   render () {
//     let photoSearch = this.props.photoSearch
//     // console.log(this.props.photoSearch)
//     return (
//       <form onSubmit={photoSearch()}>
//         <div className='input-group'>
//           <input type='text' id='search' />
//           <button type='sumbit' className='search-button'>Search</button>
//         </div>
//       </form>
//     )
//   }
// }

export default App
