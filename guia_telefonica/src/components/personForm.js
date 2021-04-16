import React from 'react';

export default function PersonForm(props){

    const handleSubmit = (event) =>{
      const names = props.persons.map((item)=>{return item['name']})
      if(names.includes(props.newName)){
        window.alert(`${props.newName} is already added to phonebook`)
      } else {
        props.setPersons(props.persons.concat({name: props.newName, number: props.newNumber}))
      }
      event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                name: <input onChange={(event)=>{props.setNewName(event.target.value)}}/><br/>
                number: <input onChange={(event)=>{props.setNewNumber(event.target.value)}}/>
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    );
}