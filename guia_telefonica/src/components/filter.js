import React from 'react';

export default function Filter(props){
    return(  
      <a>filter show with <input onChange={(event)=>{props.setFilter(event.target.value.toLowerCase())}}/></a>
    );
}