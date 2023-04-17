import Navbar from "./components/Navbar";
import CharacterCard from "./components/CharacterCard";
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import Pagination from 'react-bootstrap/Pagination';


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
    <><><Navbar>
    </Navbar>

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
                  <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mas</button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <p className="card-text">{character.description}</p>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
      <div className="Pagination" style={{ color: 'red' }}>
      <Pagination>
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item>{6}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next />
    </Pagination>
        </div></>
  );
}


export default App;
