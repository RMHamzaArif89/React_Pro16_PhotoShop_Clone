import { useState } from 'react'
import './App.css'
import Options from './components/options/Options'
import Image from './components/img/Image'

function App() {


  return (
 <div className="container">
    <h1 className="h1">Edit the photo with the grace</h1>
  <Options/>
  <Image/>
 </div>
  )
}

export default App
