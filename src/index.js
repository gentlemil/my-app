import React from 'react'
import ReactDOM from 'react-dom/client'

// function Greeting() {
//   return <h2 className='first-component'>my first component</h2>
// }

// I OPTION
function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
      <ul>
        <li>
          <Person />
        </li>
      </ul>
    </div>
  )
}

// II OPTION
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world 2')
//   )
// }

const Person = () => {
  return (
    <div className='myClass'>
      <p>John Doe</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
