import { useState } from 'react'

const Filter = ({persons, setFilteredPersons}) => {
  const [filter, setFilter] = useState('')
  
  const handleFilterChange = (event) => {
    const filter = event.target.value
    console.log(filter)
    setFilter(filter)

    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    console.log(filteredPersons)
    setFilteredPersons(filteredPersons)
  }

  return <>
    filter shown with <input
      value={filter}
      onChange={handleFilterChange}
    />
  </>
}

export default Filter