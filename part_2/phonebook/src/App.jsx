import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(
    () => {
      personService
        .getAll()
        .then(persons => {
          setPersons(persons)
          setFilteredPersons(persons)
        }
        )
    }
    , [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification successMessage={successMessage} errorMessage={errorMessage} />
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setFilteredPersons={setFilteredPersons} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} persons={persons} setPersons={setPersons} setFilteredPersons={setFilteredPersons} />
    </div>
  )
}

export default App