import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const addValue = ()=>{
  setCounter(counter=> counter+1);
  console.log(counter);
}

const removevalue = ()=>{
  setCounter(counter=> counter-1);
  console.log(counter);
  
}
const [counter, setCounter] = useState(0);
  return (
    <>
     <h1>React counter</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Increate value</button><br />
     <br />
     <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
