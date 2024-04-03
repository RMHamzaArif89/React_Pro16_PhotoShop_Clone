import React, { useState } from 'react'
import './range.css'

function Range({min,max,value,handleChange}) {
  
    

  return (
  
        <input type="range" name="" id="" 
        value={value}
        min={min} 
        max={max}
        onChange={(e)=>{handleChange(e.target.value)}}
        className='range'/>
      
   
  )
}

export default Range
