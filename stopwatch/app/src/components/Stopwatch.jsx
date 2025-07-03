import React, { useState, useEffect, useRef } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(0);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if(isRunning){
        intervalIdRef.current = setInterval(() =>{
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10);
    }

    return () =>{
        clearInterval(intervalIdRef.current);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setElapsedTime(0);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / (1000)) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
  }
  return (
    <div className="stopwatch-container">
      
      <div className="display-container">
        {formatTime()}
        <div className="controls">
          <button className="start-btn" onClick={start}>
            Start
          </button>
          <button className="stop-btn" onClick={stop}>
            Stop
          </button>
          <button className="reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      {/* <a href="https://www.guvi.in/" className="copywright">
        Made by Guvi💚
      </a> */}
    </div>
  );
}

export default Stopwatch;
