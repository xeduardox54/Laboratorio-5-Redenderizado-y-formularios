import React from 'react';

export default function Part({part}){
    return(
        <div>
            <p>Name: {part.name}</p>
            <p>Exercises: {part.exercises}</p>
            <p>Id: {part.id}</p>
        </div>
    );
}