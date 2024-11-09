import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'shreya',
    age: 19,
  }
  let newArr = [1,2,3,4,5]

  return (
    <>
       <h1 className='bg-green-400'> Tailwind test </h1>
       
    <Card username='chaiaurcode' />
    <Card username='shreya'/>


    </>
  )
}

export default App
