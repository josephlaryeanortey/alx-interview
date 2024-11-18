#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.error('Usage: ./0-starwars_characters.js <Movie ID>');
  process.exit(1);
}

const url = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data: ${response.statusCode}`);
    return;
  }

  const data = JSON.parse(body);
  const characters = data.characters;

  // Fetch and print character names in order
  const fetchCharacter = (index) => {
    if (index >= characters.length) return;
    request(characters[index], (err, res, charBody) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(JSON.parse(charBody).name);
      fetchCharacter(index + 1);
    });
  };

  fetchCharacter(0);
});
