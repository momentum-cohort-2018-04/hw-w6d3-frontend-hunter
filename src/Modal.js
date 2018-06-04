import React, { Component } from 'react'

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
              <h3 className='info__portfolio'><a href={pic.user.portfolio_url} className='link' target='_blank'>View Portfolio</a></h3>
              <h3 className='info__twitter'><a href={'https://www.twitter.com/' + pic.user.twitter_username} className='link' target='_blank'>View Twitter</a></h3>
              <h3 className='info__instagram'><a href={'https://www.instagram.com/' + pic.user.instagram_username} className='link' target='_blank'>View Instagram</a></h3>
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

export default Modal
