import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, setFilteredPersons, setSuccessMessage, setErrorMessage }) => {
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
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const updatePerson = { ...dup, number: newNumber }

        personService
          .update(updatePerson)
          .then(updatePerson => {
            const updatePersons = persons.map(person => person.id != updatePerson.id ? person : updatePerson)
            setPersons(updatePersons)
            setFilteredPersons(updatePersons)
            setSuccessMessage(`Updated number for ${newName}`)
          })
          .catch(error => {
            console.log('update error:', error)
            setErrorMessage(`${newName} has already been removed from server`)
          })
      } else {
        console.log(`Skipped updating an already existing person ${newName}`)
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }

      personService
        .create(newPerson, setErrorMessage)
        .then(newPerson => {
          if (newPerson) {
            const newPersons = persons.concat(newPerson)
            setPersons(newPersons)
            setFilteredPersons(newPersons)
            setSuccessMessage(`Added ${newName}`)
          }
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