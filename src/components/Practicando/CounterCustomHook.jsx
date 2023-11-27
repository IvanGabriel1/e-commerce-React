import React from "react";
import { useCustomHook } from "./CustomHook";

const CounterCustomHook = () => {
  const { count, decrement, increment, reset } = useCustomHook(5, 0, 15);
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={decrement}>decrement</button>
        <button onClick={increment}>increment</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default CounterCustomHook;
