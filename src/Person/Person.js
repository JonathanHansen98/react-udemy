import React from 'react';
import './Person.css'

const Person = (props) => {
    return ( 
    <div className="Person" onClick={props.click}>
        <p>I am a {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} ></input>
    </div>
    )
}

export default Person
