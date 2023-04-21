import Navbar from "./components/Navbar";
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import Pagination from 'react-bootstrap/Pagination';
import ReactPaginate from "react-paginate";


function App() {
  const [comics, setComics] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const comicsPerPage = 6;
  const charactersPerPage = 6;

  const lastComicIndex = page * comicsPerPage;
  const firstComicIndex = lastComicIndex - comicsPerPage;
  const lastCharacterIndex = page * charactersPerPage;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage;


  const currentComics = comics.slice(firstComicIndex, lastComicIndex);
  const currentCharacters = characters.slice(firstCharacterIndex, lastCharacterIndex);
  const handlePageChange = (pageNumber) => setPage(pageNumber);

  useEffect(() => {
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4c29828e2fe3a5ef253cf528691d77b1&hash=a8bade49ffcaec6a4e682725e6f5fe86`)
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
    .get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=4c29828e2fe3a5ef253cf528691d77b1&hash=a8bade49ffcaec6a4e682725e6f5fe86`)
      .then(response => {
        setComics(response.data.data.results);
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
            <div key={character.id} className="col-6 mb-4 col-lg-3">
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
          <div className="row">
          {comics && comics.map((comic) => (
            <div key={comic.id} className="col-6 mb-4 col-lg-3">
              <div className="card text-white bg-dark">
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.name}
                  className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{comic.name}</h5>
                  <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mas</button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <p className="card-text">{comic.description}</p>
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
        
      </div>
      </>
      <div className="pagination-centered">
      <Pagination className="pagination" onClick={(e) => handlePageChange(e.target.text)}>
      <Pagination.Prev/>
      <Pagination.Item  active>{1}</Pagination.Item>
      <Pagination.Item  >{2}</Pagination.Item>
      <Pagination.Item >{3}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item >{5}</Pagination.Item>
      <Pagination.Item >{6}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Next />
    </Pagination>
        </div></>
  );
}


export default App;
