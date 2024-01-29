import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let  [counter,setcounter]=useState(16);
 // let counter =15;
const  addValue =()=>{

 if(counter<20) setcounter(counter+1)

 
  console.log("clicked ",Math.random());
  console.log("counter",{counter});
}
const removeValue=()=>{
  if(counter>0)setcounter(counter-1);
  console.log("counter",{counter});
}

  return (
    <>
     <h1>chai or react</h1>
     <h2>counter value :  {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <br />

     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
