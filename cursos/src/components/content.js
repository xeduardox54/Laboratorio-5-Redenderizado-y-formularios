import React from 'react';
import Part from './part';

export default function Content({parts}){
    var exercises = []
    for (var part in parts){
        exercises.push(parts[part].exercises)
    }
    const total = exercises.reduce((s, p) => s+p)
    return(
        <div>
            {parts.map((value,index) => {
                return (
                    <div>
                        <h3>Part {index+1}</h3>
                        <Part part={value}/>
                    </div>
                )
            })}
            -----------------------------------
            <p>Total de ejercicios: {total}</p>
            -----------------------------------
        </div>
    );
}