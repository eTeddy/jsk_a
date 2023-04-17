import './Jokes.css';
import { useState } from 'react';

export const Jokes = () => {
  const [joke, setJoke] = useState('Dad Joke');

  const apiKey = '4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll';
  const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
    },
  };

  async function getJoke() {
    try {
      setJoke('Updating...');
      const response = await fetch(apiURL, options);
      const data = await response.json();

      setJoke(data[0].joke);
    } catch (error) {
      setJoke('An error happened, try again later');
      console.log(error);
    }
  }

  return (
    <div id='joke_container'>
      <h3 id='joke_title'>Dad Joke Generator</h3>
      <p id="joke_content">{joke}</p>
      <button id="joke_btn" onClick={getJoke}>New 😆 Joke</button>
    </div>
  );    
}

 