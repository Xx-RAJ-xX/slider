import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';

const Person = ({person}) => {
    const{image,name,title,quote}=person;
    return (
        <div >
            <img className="person-img" src={image} alt={name}></img>
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"/>
        </div>
    )
}

export default Person
