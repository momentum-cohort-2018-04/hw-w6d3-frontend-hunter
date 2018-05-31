import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='container'>
          <Search />
        </div>
      </div>
    )
  }
}

class Search extends Component {
  render () {
    return (
      <form>
        <div className='input-group'>
          <input type='text' />
          <button type='sumbit' class='search-button'>Search</button>
        </div>
      </form>
    )
  }
}

export default App
