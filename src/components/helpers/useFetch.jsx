import axios from 'axios';
import { useState } from 'react';

export default function useFetch() {
  
  const [getData, setFetch] = useState([]);

  // const heroes = axios.create({baseURL: 'https://superheroapi.com/api/4160513753991424'});

  // heroes.get('/732').then( setFetch );

  fetch('https://superheroapi.com/api/4160513753991424/732')
    .then(r => r.json())
    .then(console.log)

  console.log( getData );

}
