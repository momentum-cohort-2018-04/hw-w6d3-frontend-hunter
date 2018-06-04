import React, { Component } from 'react'
import Modal from './Modal'

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

export default Photo
