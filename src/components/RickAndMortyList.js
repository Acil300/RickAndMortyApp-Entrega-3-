import React from 'react';
import MortyInfo from './MortyInfo'
import { useState } from "react";

const RickAndMortyList = ({ propRicks }) => {
const [currentPage, setcurrentPage] = useState(0);

const filteredResidents = () => {
  return propRicks?.slice(currentPage, currentPage + 3);
};

console.log(propRicks);

const handleNext = () => {
  if (currentPage + 3 < propRicks?.length - 1) setcurrentPage(currentPage + 3);
};

const handlePrevious = () => {
  if (currentPage > 0) setcurrentPage(currentPage - 3);
};

const nextPage = ( ) => {
   if (currentPage + 3 < propRicks?.length - 1) {
     setcurrentPage(currentPage + 3);
   } else if (currentPage > 0) {
     setcurrentPage(currentPage - 3);
   }
}

return (
  <div>
    <div className="father-grid">
      {filteredResidents()?.map((propRick) => (
        <MortyInfo rickUrl={propRick} key={propRick} />
      ))}
    </div>
    <div className="container-page">
      <button className="buttons-number" onClick={handlePrevious}>
        <i class="fa-solid fa-angles-left"></i>
      </button>
      <button className="buttons-number" onClick={handlePrevious}>
        1
      </button>
      <button className="buttons-number" onClick={nextPage}>
        2
      </button>
      <button className="buttons-number" onClick={handleNext}>
        3
      </button>
      <button className="buttons-number" onClick={handleNext}>
        4
      </button>
      <button className="buttons-number" onClick={handleNext}>
        <i class="fa-solid fa-angles-right"></i>
      </button>
    </div>
  </div>
);
};

export default RickAndMortyList;