import { useState } from 'react'

import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import PersonFilter from './components/PersonFilter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '888-9999' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleFilterChange = event => {
    setFilter(event.target.value);
  }

  const handleNameChange = event => {
    setNewName(event.target.value);
  }

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  }

  const submitNewName = (event) => {
    event.preventDefault()

    const notExist = persons.every(person => person.name != newName);

    if (notExist) {
      const personObject = {name: newName, number: newNumber};
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    } else {
      alert(newName + ' is already added to phonebook');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter 
        filter={filter} 
        handleFilterChange={handleFilterChange} />
      <PersonForm 
        name={newName}
        number={newNumber}
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} 
        submitNewName={submitNewName}/>
      <Persons 
        persons={persons}
        filter={filter}/>
      
    </div>
  )
}

export default App