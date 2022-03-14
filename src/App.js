import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import HeaderSearchBox from './components/HeaderSearchBox'
import RickAndMortyList from './components/RickAndMortyList';
import './App.css';

function App() {
  const [rickLocation, setRickLocation] = useState({})

  useEffect(() => {
    const random = Math.floor(Math.random() * 126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setRickLocation(res.data) )
  }, [])
  


  return (
    <div className="App">
      <HeaderSearchBox setRickLocation={setRickLocation} />
      <div className="container-section-info">
        <h3 className="name-info">
          Name: <span className="span-name">{rickLocation.name}</span>
        </h3>
        <h3 className="type-info">
          Type: <span className="span-type">{rickLocation.type}</span>
        </h3>
        <h3 className="dimension-info">Dimension:
          <span className="span-dimension"> {rickLocation.dimension}</span>
        </h3>
        <h3 className="poblation-info">Poblation:
          <span className="span-poblation"> {rickLocation.id}</span>
        </h3>
      </div>
      <RickAndMortyList propRicks={rickLocation.residents}  />
    </div>
  );
}

export default App;
