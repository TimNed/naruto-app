import { Card } from './components/card';
import './App.css';
import { NarutoData } from './service';
import {useEffect, useState} from 'react';

function App() {
  const [actors, setCharacters] = useState([]);
  useEffect(() => {
    retrieveNaruto();
  })
  const retrieveNaruto = async() => {
   await NarutoData() 
    .then((response) => {
      setCharacters(response.data.characters);
      
    })
  }
  console.log(actors);
  return (
    actors.map(item => {
      <Card
        image={item.images[0]}
        characterName={item.name}
      />
    })
  
  );
}

export default App;
