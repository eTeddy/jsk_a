import './Dice.css'
import React, { useState } from 'react';

export const Dice = () => {
  const [numberOfDice, setNumberOfDice] = useState(6);
  const [diceElements, setDiceElements] = useState([]);

  const dotPositionMatrix = {
    1: [[50, 50]],
    2: [[20, 20], [80, 80]],
    3: [[20, 20], [50, 50], [80, 80]],
    4: [[20, 20], [20, 80], [80, 20], [80, 80]],
    5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
    6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]],
  };

  const createDice = (number) => {
    const dots = dotPositionMatrix[number].map((dotPosition, index) => {
      const style = {
        "--top": `${dotPosition[0]}%`,
        "--left": `${dotPosition[1]}%`,
      };
      return <div key={index} className="dice-dot" style={style}></div>;
    });
    return <div className="dice">{dots}</div>;
  };

  const randomizeDice = () => {
    const diceElements = [];
    for (let i = 0; i < numberOfDice; i++) {
      const random = Math.floor(Math.random() * 6) + 1;
      diceElements.push(createDice(random));
    }
    setDiceElements(diceElements);
  };

  const handleRollDice = () => {
    const interval = setInterval(randomizeDice, 50);
    setTimeout(() => clearInterval(interval), 1000);
  };

  return (
    <>
      <button type="button" className="btn-roll-dice" onClick={handleRollDice}>
        Roll Dice
      </button>
      <div className="dice-container">{diceElements}</div>
    </>
  );
};