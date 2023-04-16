import { useEffect, useState } from 'react';

export const Cat = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  }, []);

  const getNewFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  };

  return (  
    <div>
      <button onClick={getNewFact}>New 😺 Fact</button>
      <h1>Did you know?</h1>    
      <div className="cat_fact">{fact}</div>        
    </div>
  )
}


/*
import "./Cat.css"

import { useEffect, useState } from 'react';

export const Cat = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  },[]);

  return (
    <div className="fact">
      <h1>Did you know?</h1>      
      <button onClick={() => {setFact(data.fact)}}>More Cat Fact</button>
      <p>{fact}</p>
    </div>
  );
}
*/
