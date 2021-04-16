import React from 'react';
import Header from './header'
import Content from './content';

export default function Course({courses}) {
    return(
        <div>
            {courses.map((value,index) => {
                return (
                    <div>
                        <Header title={courses[index].name}/>
                        <Content content={value.id} parts={value.parts}/>
                    </div>
                );
            })}
        </div>
    );
}