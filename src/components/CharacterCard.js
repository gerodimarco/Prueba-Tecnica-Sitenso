import React, { useState } from 'react';

function CharacterCard({ character }) {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
    setShowDescription(!showDescription);
    };

    return (
    <div className="card" onClick={toggleDescription}>
        <img src={character.thumbnail} className="card-img-top" alt={character.name} />
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            {showDescription && <p className="card-text">{character.description}</p>}
        </div>
    </div>
    );
}

export default CharacterCard;
