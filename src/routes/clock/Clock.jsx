import './Clock.css'
import React, { useState, useEffect } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const getSecond = time.getSeconds();
  const getMinute = time.getMinutes();
  const getHour = time.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = (getHour / 12) * 360;

  return (
    <div>
      <div className="clock">
        <div className="numbers">
          <div className="twelve">12</div>
          <div className="three">3</div>
          <div className="six">6</div>
          <div className="nine">9</div>
        </div>
        <div className="arrows">
          <div className="hour" style={{ transform: `rotate(${hourDegree}deg)` }}></div>
          <div className="minute" style={{ transform: `rotate(${minuteDegree}deg)` }}></div>
          <div className="second" style={{ transform: `rotate(${secondDegree}deg)` }}></div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Rolex_logo.svg/1200px-Rolex_logo.svg.png" alt="" />
      </div>
    </div>
  );
};
