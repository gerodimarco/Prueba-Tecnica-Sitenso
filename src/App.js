import Navbar from "./components/Navbar";
import CharacterCard from "./components/CharacterCard";
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4c29828e2fe3a5ef253cf528691d77b1&hash=a8bade49ffcaec6a4e682725e6f5fe86`)
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <><Navbar />
    <div className="container">
      <div className="row">
        {characters && characters.map((character) => (
          <div key={character.id} className="col-6 mb-4">
            
            <div className="card text-white bg-dark">
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">{character.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></>

  );
}


export default App;
