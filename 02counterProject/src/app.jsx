import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  let [counter, setCounter] = useState(0)
  
  

  const addValue = () => {
    //console.log('clicked!' , counter);
    setCounter(counter +1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>Chai aur react </h1>
    <h2> counter value : {counter}</h2>

    <button onClick={addValue}> Add value </button>
    <br></br>
    <button onClick={removeValue}> Remove value {counter} </button>
    <p>footer: {counter}</p>

    </>
  )
}
