import React, { Component } from 'react'
import VideoCard from '../components/VideoCard'

export default class Home extends Component {
  render() {
    return (
      <div>
        <VideoCard 
          image={'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
          heading='Protester'
          desc='Lorem Ipsum is simply dummy text from the printing and typeseting industry'
          url='123456'
          />
      </div>
    )
  }
}
