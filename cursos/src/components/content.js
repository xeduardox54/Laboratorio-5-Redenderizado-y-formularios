import React from 'react';
import Part from './part';

export default function Content({parts}){
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
        </div>
    );
}