import React, {useState} from "react"

function App() {

  let [color , setColor] = useState();

  return (
    <div className = "w-full h-screen duration-200" style = {{backgroundColor: color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setColor('red')}
          className= "outline-none px-4 bg-red-700 rounded-full text-white">
            Red
          </button>
          <button onClick={() => setColor('green')}
          className= "outline-none px-4 bg-green-700 rounded-full text-white">
            Green
          </button>
          <button onClick={() => setColor('blue')}
          className= "outline-none px-4 bg-blue-700 rounded-full text-white">
            Blue
          </button>
          <button onClick={() => setColor('olive')}
          className= "outline-none px-4 bg-olive-700 rounded-full text-white">
            Olive
          </button>
          <button onClick={() => setColor('gray')}
          className= "outline-none px-4 bg-gray-700 rounded-full text-white">
            Gray
          </button>
          <button onClick={() => setColor('yellow')}
          className= "outline-none px-4 bg-yellow-700 rounded-full text-white">
            Yellow
          </button>
          <button onClick={() => setColor('pink')}
          className= "outline-none px-4 bg-pink-700 rounded-full text-white">
            Pink
          </button>
          <button onClick={() => setColor('purple')}
          className= "outline-none px-4 bg-purple-700 rounded-full text-white">
            Purple
          </button>
          <button onClick={() => setColor('lavender')}
          className= "outline-none px-4 rounded-full text-black" style={{backgroundColor: "lavender"}}>
            Lavender
          </button>
          <button onClick={() => setColor('white')}
          className= "outline-none px-4 rounded-full text-black" style={{backgroundColor: "white"}}>
            White
          </button>
          <button onClick={() => setColor('black')}
          className= "outline-none px-4 rounded-full text-white" style={{backgroundColor: "black"}}>
            Black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
