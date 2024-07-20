import { useState } from 'react'

const Contact = ({ person }) =>
<>
  {person.name} <br />
</>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const dup = persons.find(person => person.name === newName)
    
    if (dup) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = { name: newName }
      setPersons(persons.concat(newPerson))
    }

    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Contact key={person.name} person={person} />)}
    </div>
  )
}

export default App