import Navbar from "./components/Navbar";
import axios from 'axios';
import {useState, useEffect} from 'react';


// https://gateway.marvel.com:443/v1/public/characters?apikey=4c29828e2fe3a5ef253cf528691d77b1

// key publica: 4c29828e2fe3a5ef253cf528691d77b1
// key privada: 63bb2ad248451dec656324da9f6e05baba18d0aa
// ts:1
// md5:  163bb2ad248451dec656324da9f6e05baba18d0aa4c29828e2fe3a5ef253cf528691d77b1
// hash: a8bade49ffcaec6a4e682725e6f5fe86

function App() {
  const [personajes, setPersonajes]=useState([])


  useEffect(()=> {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=4c29828e2fe3a5ef253cf528691d77b1&hash=a8bade49ffcaec6a4e682725e6f5fe86')
    .then(res=>{setPersonajes(res.data.data.results)
    }).catch(error=>console.log(error))
  },[])

  console.log(personajes)





  return (
    

    <Navbar />


    
  )

}

export default App;
