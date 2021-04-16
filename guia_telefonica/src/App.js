import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleSubmit = (event) =>{
    setPersons(persons.concat({name:newName}))
    event.preventDefault()
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((value)=>{
        return <div>{value.name}</div>
      })}
    </div>
  )
}

export default App