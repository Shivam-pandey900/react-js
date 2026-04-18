import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function Appp(){
  return(
    <h1>Hello how are you?</h1>
  )
}

// custom reactElement

// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "click me to visit google",
// }

// not working as above

// const reactElement = <a href='https://google.com' target='_blank'>Click me to visit google</a>

// above one works fine

const anotherchild = "<br> chai aur React!"

const reactElement = React.createElement(
  'a',
  {href: "https://google.com",
   target: "_blank"},
   "Click me to Visit Google",
   anotherchild
)

// suppose if we want to add a variable then how can we do that

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    // <App />
    reactElement

);

