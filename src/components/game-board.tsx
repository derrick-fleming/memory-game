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
  const [tries, setTries] = useState(0);

  function handleFlip(e: SyntheticEvent){
    const cardId = e.currentTarget.id
    let count: number;
    if (firstCard === '' && !matched.includes(cardId)) {
      setFirstCard(cardId);
       count = flippedCount + 1
      setFlippedCount(count);
      return;
    } else if (!matched.includes(cardId)) {
       count = flippedCount + 1
    }

    if (count === 2) {
      setFirstCard('');
      setTries(tries + 1);
      setTimeout(()=> {
        setFlippedCount(0)
        if (firstCard === cardId) {
          const array = matched;
          array.push(cardId);
          setMatched(array);
        }
      }, 600)
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

  if (matched.length === shapes.length) {
    return (
      <div>
        <h1>It took you {tries} guesses with {matched.length} possible matches.</h1>
        <h1>Your accuracy is: {Math.floor((matched.length / tries) * 100)}%</h1>
      </div>
    )
  }
  return cardTypes;
}

export default GameBoard;
