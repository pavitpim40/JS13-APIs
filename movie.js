// Endpoint
const queryKeyword = 'inter';
const page = 5;
const BASE_URL = 'https://api.themoviedb.org/3';
const endpoint = `${BASE_URL}/search/keyword?query=${queryKeyword}&page=${page}`;

// Option
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDRhZDg0YTEzODRkMDRjNGY0YWVlMzZmNGE5YjE0OCIsInN1YiI6IjVlZWUwOTAwYjA0NjA1MDAzNDBlOTg2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7gQK0dgqOvsQmsHsgtOmsqKVFmnb1urXF3q9AkqyCE';

const option = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
};

console.log(endpoint);

const fetch = require('node-fetch');
fetch(endpoint, option)
  .then((result) => result.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(error));
