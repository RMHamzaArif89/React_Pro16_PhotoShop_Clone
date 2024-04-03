import { useState } from 'react'
import './App.css'
import Options from './components/options/Options'
import Image from './components/img/Image'
import Range from './components/range/Range'

function App() {
  let Default_Values=[
    {
      name:'Brightness',
      property:'brightness',
      value:0,
      range:{
        min:0,
        max:200
      },
      unit:'%'
    },
    {
      name:'Contrast',
      property:'contrast',
      value:100,
      range:{
        min:0,
        max:200
      },
      unit:'%'
    },
    // {
    //   name:'Situration',
    //   property:'situration',
    //   value:100,
    //   range:{
    //     min:0,
    //     max:200
    //   },
    //   unit:'%'
    // },
    {
      name:'Grayscale',
      property:'grayscale',
      value:100,
      range:{
        min:0,
        max:100
      },
      unit:'%'
    },
    {
      name:'Sepia',
      property:'sepia',
      value:100,
      range:{
        min:0,
        max:100
      },
      unit:'%'
    },
    {
      name:'Hue Rotate',
      property:'hue rotate',
      value:100,
      range:{
        min:0,
        max:360
      },
      unit:'deg'
    },
    {
      name:'Blur',
      property:'blue',
      value:100,
      range:{
        min:0,
        max:20
      },
      unit:'deg'
    },
  ]
let[selectedIndex,setSelectedIndex]=useState(0)
  let [options,setOptions]=useState(Default_Values)
  let selectedOption=options[selectedIndex]






  function handleChange({target}){
    setOptions(pre=>{
      return pre.map((option,index)=>{
        if(index!==selectedIndex){
          return option
        }
        return{...option,value:target.vlaue}
      })
    })
  }



  function imgStyle(){
       const filter=options.map((option)=>{
        return`${option.property}(${option.value}${option.unit})`
        return console.log(option.value)
       })
      
       return{filter:filter.join(' ')}
  }
  console.log(imgStyle())
  return (
 <div className="container">
    <h1 className="h1">Edit the photo with the grace</h1>
<div className="options">
{
  options.map((val,i)=>{
    return <Options value={val} key={i}
    active={i===selectedIndex}
    ClickFunc={()=>{setSelectedIndex(i)}}
    />

  })
}
</div>
  <Image imgStyle={imgStyle}/>
  <Range
  min={selectedOption.range.min}
  max={selectedOption.range.max}
  value={selectedOption.value}
  handleChange={handleChange}
  />
 </div>
  )
}

export default App
