import { useState } from 'react'

const Button = ( {handleClick, text} ) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ( {text, count} ) => (
  <p>{text} {count}</p>
)

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementCount = ( {count, setValue} ) => {
    return () => setValue(count + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementCount( {count: good, setValue: setGood} )} text='good' />
      <Button handleClick={incrementCount( {count: neutral, setValue: setNeutral} )} text='neutral' />
      <Button handleClick={incrementCount( {count: bad, setValue: setBad} )} text='bad' />
      <h1>statistics</h1>
      <Display text='good' count={good} />
      <Display text='neutral' count={neutral} />
      <Display text='bad' count={bad} />
    </div>
  )
}

export default App