import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <h1 className='bg-green-400 text-black mb-4'>Tailwind Test</h1>
     <Card username="ChaiAurCode" btnTxt="Click Me"/>
     <Card username="Anuj" btnTxt="Visit Me"/>
     <Card username="Anuj" />
    </>
  )
}

export default App
