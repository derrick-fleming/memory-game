import React, { useEffect, useState } from "react";
import shapes from "../lib/shapes";
import Card from "./card";
import _ from 'lodash';

let cardShapes: string[] = [];
shapes.forEach(shape => {
  cardShapes.push(shape);
  cardShapes.push(shape);
})

const shuffledCards = _.shuffle(cardShapes);

const GameBoard = function () {
  const [flippedCount, setFlippedCount] = useState(0);

  function handleFlip(){
    const count = flippedCount + 1
    if (count === 2) {
      setTimeout(()=> {
        setFlippedCount(0)
      }, 1000)
    } else {
      setFlippedCount(count);
    }
  }

  const cardTypes = shuffledCards.map((card, index) => {
    return (
      <div className='flip-container' key={index} onClick={handleFlip}>
        <Card symbol={card} count={flippedCount}/>
      </div>
      )
  })
  return cardTypes;
}

export default GameBoard;
