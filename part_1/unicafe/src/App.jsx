import { useState } from 'react'

const Button = ( {handleClick, text} ) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ( {text, value} ) => <p>{text} {value}</p>

const Statistics = (props) => {
  if (props.total == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.total} />
      <StatisticLine text='average' value={props.average} />
      <StatisticLine text='positive' value={props.positive + '%'} />
    </div>
  )
}

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
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score} average={average} positive={positive} />
    </div>
  )
}

export default App