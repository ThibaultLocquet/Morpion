import React, { useState } from "react";
import Square from "./Square";
const Morpion = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [tourDeJeu, setTourDeJeu] = useState(true);
  const [end, setEnd] = useState(false);
  const [affichageTurn, setAffichageTurn] = useState("X");

  function win() {
    const condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (let i = 0; i < condition.length; i++) {
      const [a, b, c] = condition[i];
      if (
        [a] != null &&
        [b] != null &&
        [c] != null &&
        [a] === [b] &&
        [c] === [b]
      ) {
        return true;
      }
    }
    return false;
  }

  function handleclick(i) {
    if (end === false) {
      if (tourDeJeu === true) {
        let newsquare = square;
        if (newsquare[i] === null) {
          newsquare[i] = "X";
          setSquare(newsquare);
          setTourDeJeu(!tourDeJeu);
          setAffichageTurn("X");
          console.log([i]);
          if (win() === true) {
            setEnd(true);
          }
        }
      } else if (tourDeJeu === false) {
        let newsquare = square;
        if (newsquare[i] === null) newsquare[i] = "O";
        setSquare(newsquare);
        setTourDeJeu(!tourDeJeu);
        setAffichageTurn("O");
        console.log([i]);
        if (win() === true) {
          setEnd(true);
        }
      }
    }
  }

  return (
    <div className="global">
      <h1>Next turn : {affichageTurn}</h1>
      <div className="board">
        {square.map((e, index) => (
          <Square
            key={index}
            value={square[index]}
            onClick={() => handleclick(index)}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setSquare(Array(9).fill(null));
          setTourDeJeu(true);
          setEnd(false);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Morpion;

/* condition de victoire ne fonctionne pas */
