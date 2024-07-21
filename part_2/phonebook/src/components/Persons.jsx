import Contact from './Contact'

const Persons = ({filteredPersons}) => 
<>
  {filteredPersons.map(person => <Contact key={person.id} person={person} />)}
</>

export default Persons