import React, { SyntheticEvent, useEffect, useState } from "react";
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
  const [firstCard, setFirstCard] = useState('');

  function handleFlip(e: SyntheticEvent){
    if (firstCard === '') {
      setFirstCard(e.currentTarget.id);
    }

    const count = flippedCount + 1
    if (count === 2) {
      setFirstCard('');
      setTimeout(()=> {
        setFlippedCount(0)
      }, 1000)
    } else {
      setFlippedCount(count);
    }
  }

  const cardTypes = shuffledCards.map((card, index) => {
    return (
      <div className='flip-container' key={index} onClick={handleFlip} id={card}>
        <Card symbol={card} count={flippedCount}/>
      </div>
      )
  })
  return cardTypes;
}

export default GameBoard;
