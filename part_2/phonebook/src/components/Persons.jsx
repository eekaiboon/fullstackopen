import Contact from './Contact'

const Persons = ({persons, filteredPersons, setPersons, setFilteredPersons}) => 
<>
  {filteredPersons.map(person => <Contact key={person.id} person={person} persons={persons} setPersons={setPersons} setFilteredPersons={setFilteredPersons}/>)}
</>



export default Persons