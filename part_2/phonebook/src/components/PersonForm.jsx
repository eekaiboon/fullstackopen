import { useState } from 'react'
import axios from 'axios'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons,setFilteredPersons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const dup = persons.find(person => person.name === newName)
    
    if (dup) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length+1
      }
      
      personService
        .create(newPerson)
        .then(newPerson => {
          const newPersons = persons.concat(newPerson)
          setPersons(newPersons)
          setFilteredPersons(newPersons)
      })
    }

    setNewName('')
    setNewNumber('')
  }

  return <>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
}

export default PersonForm