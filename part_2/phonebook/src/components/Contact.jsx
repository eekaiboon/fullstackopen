import persons from '../services/persons'
import personService from '../services/persons'

const handleDelete = (deletePerson, persons, setPersons, setFilteredPersons) => {
  if (window.confirm(`Delete ${deletePerson.name}?`)) {
    personService
      .deletePerson(deletePerson)
      .then(response => {
        const updatedPersons = persons.filter(person => person.id != deletePerson.id)
        setPersons(updatedPersons)
        setFilteredPersons(updatedPersons)
      })
  } else {
    console.log(`Did not delete ${deletePerson.name}`)
  }
}

const Contact = ({ person, persons, setPersons, setFilteredPersons }) =>
  <>
    {person.name} {person.number} <button onClick={() => handleDelete(person, persons, setPersons, setFilteredPersons)}>
      delete
    </button><br />
  </>

export default Contact