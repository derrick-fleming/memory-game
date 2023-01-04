import React, { SyntheticEvent, useState } from "react";
import shapes from "../lib/shapes";
import Card from "./card";
import _ from 'lodash';
import { Link } from 'react-router-dom';


let easyCardShapes: string[] = [];
for (let i = 0; i < 4; i++) {
  easyCardShapes.push(shapes[i]);
  easyCardShapes.push(shapes[i]);
}
const easyShuffledCards = _.shuffle(easyCardShapes);

let mediumCardShapes: string[] = [];
for (let i = 0; i < 6; i++) {
  mediumCardShapes.push(shapes[i]);
  mediumCardShapes.push(shapes[i]);
}

const mediumShuffledCards = _.shuffle(mediumCardShapes);

let hardCardShapes: string[] = [];
for (let i = 0; i < 8; i++) {
  hardCardShapes.push(shapes[i]);
  hardCardShapes.push(shapes[i])
}

const hardShuffledCards = _.shuffle(hardCardShapes)

const GameBoard = function (props: {level: string}) {

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

  const shuffledCards = props.level === 'easy'
    ? easyShuffledCards
    : props.level === 'medium'
      ? mediumShuffledCards
      : hardShuffledCards;

  let cardTypes = shuffledCards.map((card, index) => {

    const matchedClass = matched.includes(card)
      ? 'matched-card'
      : '';

    return (
      <div key={index} className="col-4">
        <div className={`flip-container ${matchedClass}`} onClick={handleFlip} id={card}>
          <Card symbol={card} count={flippedCount} />
        </div>
      </div>

      )
  })

  if (matched.length === shuffledCards.length / 2) {
    return (
      <>
        <div className='text-center'>
          <h3>It took you {tries} guesses with {matched.length} possible matches.</h3>
          <h3>Your accuracy is: {Math.floor((matched.length / tries) * 100)}%</h3>
        </div>
        <div className="text-center mt-4">
          <Link to='/dist/index.html' className="difficulty-button">
            Return Home
          </Link>
        </div>
      </>
    )
  }
  return (
    <>
      <div>
        <h3 className='guesses'>
          Number of Guesses: {tries}
        </h3>
      </div>
      <div className="game-board-container">
        <div className='row'>
          {cardTypes}
        </div>
      </div>

    </>
  );
}

export default GameBoard;
