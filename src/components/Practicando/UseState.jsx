import React, { useState } from "react";

export const UseState = () => {
  const [cont, setCont] = useState(0);

  return (
    <div>
      <button onClick={() => setCont(cont + 1)}>Incrementar contador</button>
      <p>Contador: {cont}</p>
      <button onClick={() => setCont(cont - 1)}>Decrementar contador</button>
    </div>
  );
};

export default UseState;
