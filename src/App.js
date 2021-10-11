import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {useState} from 'react';
import people from './data';
import Person from './Person';
const App = () => {

  const[index,setIndex]= useState(0);

  const handlePrev = () =>{
    if(index===0){setIndex(people.length-1); return;}  
    setIndex(index-1)
  }

  const handleNext = () =>{
    if(index===people.length-1){setIndex(0);return}
    setIndex(index+1);
  }

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        <Person key={people[index].id} person= {people[index]}/>
        <button className="prev" onClick={handlePrev}><FiChevronLeft/></button>
        <button className="next" onClick={handleNext}><FiChevronRight/></button>
      </div>
    </section>
  )
}

export default App
