import { useState } from 'react'

const randomInt = (max) => {
  const result = Math.floor(Math.random() * max)
  console.log('max: ', max, 'result: ', result)
  return result
}

const handleNextAnecdote = (max, setSelected) => () => setSelected(randomInt(max))

const handleVote = (selected, points, setPoints) => {
  console.log('selected: ', selected, 'before points: ', points)
  const copy = [...points]
  copy[selected] += 1
  console.log('after points', copy)
  return () => setPoints(copy)
}

const Button = ( {handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const maxAnecdoctesIndex = anecdotes.length-1

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  return (
    <div>
      {anecdotes[selected]} <br />
      has {points[selected]} votes <br />
      <Button handleClick={handleVote(selected, points, setPoints)} text='vote' />
      <Button handleClick={handleNextAnecdote(maxAnecdoctesIndex, setSelected)} text='next anecdotes' />
    </div>
  )
}

export default App