import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [seconds, setSeconds] = useState(0);
  const [laps, setLaps] = useState(0);

  useEffect(() => {
    setSeconds(0);

    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [laps]);

  return (
    <div>
      <p>Vueltas: {laps}</p>
      <p>Tiempo en segundos: {seconds}</p>
      <button onClick={() => setLaps(laps + 1)}>Finalizar vuelta</button>
    </div>
  );
};

export default UseEffect;
