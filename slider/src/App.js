import { useEffect } from 'react';
import { useState } from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import './App.css';
import data from "./data"
function App() {
  const [people,setPeople]=useState(data);
  const [index,setIndex]=useState(0)
  console.log("Hello Ram Ji")

  useEffect(()=>{
    let lastIndex=people.length-1;
    if(index==lastIndex){
      setIndex(0);
    }
    if(index<0){
      setIndex(lastIndex)
    }
  },[index,people])
  useEffect(()=>{
    let si=setInterval(()=>{
      setIndex(index+1)
    },2000)
    return ()=>clearInterval(si);
  },[index])
  console.log(index)
  return (
    <>
      <div className="container">
        <div className="header-title">
          <h1>Review</h1>
        </div>
        <div className="section">
          <div className="next-prev">
            <GrFormPreviousLink
              onClick={() => {
                setIndex(index - 1);
              }}
            />
          </div>
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person;
              let position = "nextSlide";
              if (index == personIndex) {
                position = "activeSlide";
              }
              if(personIndex==(index-1) || (index==0 && personIndex==(people.length-1))){
                position="lastSlide";
              }
              return (
                <article key={id} className={position}>
                  <div className="image">
                    <img src={image} alt="" />
                  </div>
                  <div className="content">
                    <h3 className="name">{name}</h3>
                    <h4 className="title">{title}</h4>
                    <p>{quote}</p>
                  </div>
                  <div className="quote">
                    <FaQuoteRight />
                  </div>
                </article>
              );
            })}
          </div>
          <div className="next-prev">
            <GrFormNextLink onClick={() => setIndex(index + 1)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
