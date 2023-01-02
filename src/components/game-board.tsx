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
  const [matched, setMatched] = useState([]);

  function handleFlip(e: SyntheticEvent){
    if (firstCard === '') {
      setFirstCard(e.currentTarget.id);
    }

    if (firstCard === e.currentTarget.id) {
      const array = matched;
      array.push(e.currentTarget.id);
      setMatched(array);
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

    const matchedClass = matched.includes(card)
      ? 'matched-card'
      : '';

    return (
      <div className={`flip-container ${matchedClass}`} key={index} onClick={handleFlip} id={card}>
        <Card symbol={card} count={flippedCount}/>
      </div>
      )
  })
  return cardTypes;
}

export default GameBoard;
