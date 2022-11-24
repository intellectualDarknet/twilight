import React, { ReactElement } from 'react'

export const App = (): ReactElement<any, any> => {
  const [count, setCount] = React.useState(0)

  return (
    <>
      <img src='./styles/bleach.jpg' alt='' />
      <h1>Hello React {count}</h1>
      <button
        onClick={() => {
          setCount((prev) => ++prev)
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount((prev) => --prev)
        }}
      >
        Decrement
      </button>
    </>
  )
}

export default App
