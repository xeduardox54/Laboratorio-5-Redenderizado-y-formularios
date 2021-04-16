import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number:"39-44-5323523" }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const handleSubmit = (event) =>{
    const names = persons.map((item)=>{return item['name']})
    if(names.includes(newName)){
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name:newName,number:newNumber}))
    }
    event.preventDefault()
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter show with <input onChange={(event)=>{setFilter(event.target.value)}}/>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={(event)=>{setNewName(event.target.value)}}/><br/>
          number: <input onChange={(event)=>{setNewNumber(event.target.value)}}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((value)=>{
        if(value.name.toLowerCase().indexOf(filter)>=0){
          return <div>{value.name} {value.number}</div>
        }
      })}
    </div>
  )
}

export default App