import React from 'react';

export default function Persons(props){
    return(        
      props.persons.map((value)=>{
        if(value.name.toLowerCase().indexOf(props.filter)>=0){
          return <div>{value.name} {value.number}</div>
        }
      })
    );
}