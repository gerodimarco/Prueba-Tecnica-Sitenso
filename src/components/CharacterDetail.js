import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterDetail({ character }) {
const [comics, setComics] = useState([]);

useEffect(() => {
    axios.get(`https://gateway.marvel.com/v1/public/characters/${character.id}/comics?apikey=4c29828e2fe3a5ef253cf528691d77b1&hash=a8bade49ffcaec6a4e682725e6f5fe86`)
        .then(response => {
            setComics(response.data.data.results);
        })
        .catch(error => {
            console.log(error);
        });
}, [character.id]);

return (
    <div>
        <h2>{character.name}</h2>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        <p>{character.description}</p>
        <h3>Cómics:</h3>
        <ul>
        {comics.map(comic => (
            <li key={comic.id}>{comic.title}</li>
        ))}
        </ul>
    </div>
);
}

export default CharacterDetail;

