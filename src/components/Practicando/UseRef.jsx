import React, { useRef } from "react";

const UseRef = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    divRef.current.innerHTML = "nuevo contenido";
  };

  return (
    <>
      <div ref={divRef}>Contenido Original</div>
      <button onClick={handleClick}>Cambiar contenido</button>
    </>
  );
};

export default UseRef;
