import React, { useState } from "react";
import shapes from "../lib/shapes";
import _ from 'lodash';


let cardShapes: string[] = [];
shapes.forEach(shape => {
  cardShapes.push(shape);
  cardShapes.push(shape);
})

const shuffledCards = _.shuffle(cardShapes);

const Cards = function () {

  const cardTypes = shuffledCards.map((card, index) => {
    return (
      <div className='flip-container' key={index}>
        <Card symbol={card}/>
      </div>
      )
  })
  return cardTypes;
}

const Card = function(props: {symbol: string}){
  const [flipClass, setFlipClass] = useState(false);

  function handleFlip() {
    if (flipClass) {
      setFlipClass(false)
    } else {
      setFlipClass(true)
    }
  }

  const flippedClass = flipClass ? 'flipped-card' : '';

  return (
    <div className={`flipper ${flippedClass}`}>
      <button onClick={handleFlip} className={`front card`}>
        <h1 className="hidden fa-solid fa-question"></h1>
      </button>
      <button className={`back card`} id={props.symbol}>
        <h1 className={`fa-solid fa-${props.symbol}`}></h1>
      </button>
    </div>

  )


}

export default Cards;
