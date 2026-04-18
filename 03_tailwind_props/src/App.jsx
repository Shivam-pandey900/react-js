import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from '../components/Card'


// you can take a component from : https://www.devui.in/components

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>

      <Card userName= "Shivam" message= "Explore more"/>
      <Card />
    </>
  )
}

export default App
