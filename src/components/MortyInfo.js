import React from 'react';
import Episodes from "./Episodes";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";


const MortyInfo = ({rickUrl}) => {
  const[ rickMorty, setRickMorty] = useState({})

  useEffect(() => {
    axios
      .get(rickUrl)
        .then((res) => setRickMorty(res.data));
  }, [rickUrl])

  console.log(rickMorty)

  return (
      <div className="container-all-info">
        <img src={rickMorty?.image} alt="gif-morthy" />
        <h1>{rickMorty.name}</h1>
        <h3>Raza: <br /> <span id ='letter-info'>{rickMorty.species}</span></h3>
        <h3>Origin: <br /> <span id ='letter-info'>{rickMorty.origin?.name}</span></h3>
        {
          rickMorty.episode?.map((url) => (
          <Episodes url={url} key={url} />
          ))
        }
      </div>
  );
};

export default MortyInfo;