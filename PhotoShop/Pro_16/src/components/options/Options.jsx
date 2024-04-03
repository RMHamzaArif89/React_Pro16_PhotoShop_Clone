import React from 'react'
import './options.css'

function Options({value,active,ClickFunc}) {
    
  return (
  
<button  className={`btn ${active? 'active':''} `} onClick={ClickFunc}>{value.name}</button>
      
  )
}

export default Options
