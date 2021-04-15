import React from 'react';
import Header from './header'
import Content from './content';

export default function Course({course}) {
    return(
        <div>
            <Header title={course.name}/>
            <Content content={course.id} parts={course.parts}/>
        </div>
    );
}