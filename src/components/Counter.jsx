import React from 'react'

import useCounter from '../hooks/useCounter'

const Counter = () => {
  const counter = useCounter()

  return (
    <div>
      <h2>Count App</h2>
      <div>{counter.value}</div>
      <button onClick={counter.increase}>plus</button>
      <button onClick={counter.decrease}>minus</button>
      <button onClick={counter.zero}>zero</button>
    </div>
  )
}

export default Counter