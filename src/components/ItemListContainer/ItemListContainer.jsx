import React from "react";
import "./itemlistcontainer.css";
//Cuando hacermos una export directa tenemos que importarla con llaves (en App.jsx)
/* export */ const ItemListContainer = ({ title }) => {
  return (
    <div className="itemlist-container">
      <h1 className="itemlist-title">{title}</h1>
    </div>
  );
};

//Si exportamos default la importacion es sin las llaves.
export default ItemListContainer; //Aca lo exportamos y lo importamos en App.jsx
