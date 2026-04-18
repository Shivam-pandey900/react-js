import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // let counter = 15;
  // useState is a hook and a kind of method which return an array with two elements.
  let [counter , setCounter] = useState(15);

  function addValue(){
    // counter = counter + 1;
    // setCounter(counter)
    if(counter == 20)
        return
    setCounter(counter + 1)
    console.log(counter);
  }

  function removeValue(){
    if(counter == 0)
        return
    // counter = counter - 1;
    // setCounter(counter)
    setCounter(counter - 1)
    console.log(counter);
  }

  // this way the value of counter is not updating , to do so 
  // we will have to use hooks - useState.

  return (
    <>
      <h1>Shivam aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
