import React, { useState } from 'react'
import './range.css'

function Range({min,max,value,handleChange}) {
  console.log(value)
    

  return (
  
        <input type="range" name="" id="" 
        value={value}
        min={min} 
        max={max}
        onChange={handleChange}
        className='range'/>
      
   
  )
}

export default Range
