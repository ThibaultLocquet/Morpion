import React from "react";
import "./App.css";
const Square = ({ onClick, value }) => {
  return (
    <div className="square" onClick={onClick}>
      <p>{value}</p>
    </div>
  );
};

export default Square;
