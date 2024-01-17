import React from "react";
import "./pageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-error-container">
      <h2>ERROR 404</h2>
      <img
        src="https://i.ytimg.com/vi/ouYE8dncaCQ/maxresdefault.jpg"
        alt="Imagen de error"
      />
    </div>
  );
};

export default PageNotFound;
