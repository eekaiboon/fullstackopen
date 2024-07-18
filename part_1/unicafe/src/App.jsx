import { useState } from 'react'

const Button = ( {handleClick, text} ) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ( {text, value} ) => (
  <p>{text} {value}</p>
)

const Statistics = (props) => (
  <div>
    <h1>statistics</h1>
    <Display text='good' value={props.good} />
    <Display text='neutral' value={props.neutral} />
    <Display text='bad' value={props.bad} />
    <Display text='all' value={props.total} />
    <Display text='average' value={props.average} />
    <Display text='positive' value={props.positive + '%'} />
  </div>
)

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementCount = ( {count, setValue} ) => {
    return () => setValue(count + 1)
  }

  // calculate stats
  const total = good + neutral + bad
  const score = good * 1 + neutral * 0 + bad * -1
  const average = score / total
  const positive = good / total * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={incrementCount( {count: good, setValue: setGood} )} text='good' />
      <Button handleClick={incrementCount( {count: neutral, setValue: setNeutral} )} text='neutral' />
      <Button handleClick={incrementCount( {count: bad, setValue: setBad} )} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score} average={average} positive={positive} />
    </div>
  )
}

export default App