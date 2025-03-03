import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isActive, timeLeft]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(10);
  };

  return (
    <div>
      <h1>{timeLeft > 0 ? timeLeft : "Time's up!"}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
