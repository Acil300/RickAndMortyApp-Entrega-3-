import React from 'react';
// import img1 from '../assets/img/img1.png'
import { useState } from "react";
import axios from 'axios';

const HeaderSearchBox = ({ setRickLocation }) => {
  const [searchRick, setSearchRick] = useState("");

  const searchType = () => {
//hacemos la peticion con el id que haya colocado el usuario en el input
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchRick}`)
        .then((res) => setRickLocation(res.data));
  };
  const searchInput = () =>{
   document.getElementById('input').value='';
   searchInput.value ='';
  }

  const pressKeyInput = e => {
    if (e.key === "Enter") searchInput();
  }


  return (
    <div className="header-search">
      {/* <img src={img1} alt="imagen rick and morty" className='img-header' /> */}
      <input
        type="text"
        id="input"
        onChange={(e) => setSearchRick(e.target.value)}
        value={searchRick}
        onKeyDown={(e) => pressKeyInput(e)}
      />
      <button className="button-search" onClick={searchType}>
        SEARCH
      </button>
    </div>
  );
};

export default HeaderSearchBox;