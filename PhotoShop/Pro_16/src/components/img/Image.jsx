import React from 'react'
import './image.css'

function Image({imgStyle}) {
  return (
    <div className='img'>
      <img src="/images/img1.jpg" alt="" style={imgStyle()}/>
    </div>
  )
}

export default Image
