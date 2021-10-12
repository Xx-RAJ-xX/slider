import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import {useState, useEffect} from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import people from './data';
const App = () => {


  const[index,setIndex]= useState(0);
  //const[people,setPeople] =useState(data);

  const handlePrev = () =>{
    if(index===0){setIndex(people.length-1); return;}  
    setIndex(index-1)
  } 

  const handleNext = () =>{
    if(index===people.length-1){setIndex(0);return}
    setIndex(index+1);
  }

  useEffect(()=>{
    let slider = setInterval(()=>{
      if(index===people.length-1){setIndex(0);}
      else{setIndex(index+1);}
    },3000);

    return () => clearInterval(slider)
  },[index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {
          people.map((person,personIndex)=>{
              const {id,image,name,title,quote}=person;

              let position="nextSlide";
              if(personIndex === index){position='activeSlide';}
              if(personIndex === index-1 || (index===0 && personIndex===people.length-1) ){position ='lastSlide';}


              return (
                <article className={position} key={id}>
                    <img src={image} alt={name} className='person-img'/>
                    <h4>{name}</h4>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className="icon"/>
                </article>

              );
          })
        }
        <button className="prev" onClick={handlePrev}><FiChevronLeft/></button>
        <button className="next" onClick={handleNext}><FiChevronRight/></button>
      </div>
    </section>
  )
}

export default App
