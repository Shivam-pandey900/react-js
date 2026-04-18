import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {


  let [counter , setCounter] = useState(10);

  // useState returns an array.
  // here counter is a variable while setCounter is a function. 


  function addValue(){
    // counter = counter + 1;
    // setCounter(counter)
    if(counter == 20)
        return
    // setCounter(counter + 1)

    // an interview question what will happen if i write multiple setCounter one after another
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

    // there will be a single update of +1
    // React sends as batches so only single one will work.

    // if setCounter was written like this then it would have done +4

    setCounter((prevCounter) => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
}


  // let counter = 15;
  // useState is a hook and a kind of meth only because react treats them in batches


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
