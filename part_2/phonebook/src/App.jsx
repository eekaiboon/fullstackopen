import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState(persons)

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
    ,[])
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilteredPersons={setFilteredPersons} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setFilteredPersons={setFilteredPersons} />
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App