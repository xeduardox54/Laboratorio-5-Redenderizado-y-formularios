import React, { useState } from 'react';
import Filter  from './components/filter';
import PersonForm  from './components/personForm';
import Persons from './components/persons';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:"39-44-5323523" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter setFilter={setFilter}/>
      <h2>Add a new</h2>
        <PersonForm 
          newName={newName}
          newNumber={newNumber}
          persons={persons}
          setNewName={setNewName}
          setNewNumber={setNewNumber} 
          setPersons={setPersons}
        />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App