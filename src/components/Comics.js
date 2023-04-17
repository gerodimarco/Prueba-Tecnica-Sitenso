import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';


function Comics() {
    const [comic, setComicsData] = useState([]);
    useEffect(() => {
        axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=4c29828e2fe3a5ef253cf528691d77b1&hash=a8bade49ffcaec6a4e682725e6f5fe86`)
        .then(response => {
            setComicsData(response.data.data.results);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);


return (
        <div>
        <h1>Comics</h1>
        <ul>
            {this.state.comicsData.map((comic) => (
            <li key={comic.id}>
                <div className='card'>
                    <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    className='card-img-top'
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>{comic.title}</h5>
                        <p className='card-text'>{comic.description}</p>
                        <a href={comic.urls[0].url} className='btn btn-primary'>
                        Ver más
                        </a>
                    </div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
}


export default Comics;
