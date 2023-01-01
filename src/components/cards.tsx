import React, { useEffect, useState } from "react";
import shapes from "../lib/shapes";
import _ from 'lodash';


let cardShapes: string[] = [];
shapes.forEach(shape => {
  cardShapes.push(shape);
  cardShapes.push(shape);
})

const shuffledCards = _.shuffle(cardShapes);

const Cards = function () {
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

const Card = function(props: {symbol: string, count: number}){
  const [flipClass, setFlipClass] = useState(false);

  useEffect(()=> {
    if (props.count === 0) {
      setFlipClass(false)
    }
  })

  function handleFlip() {
    if (flipClass) {
      setFlipClass(false)
    } else {
      setFlipClass(true)
    }
  }
  let flippedClass = flipClass ? 'flipped-card' : '';
  if (props.count >= 2 || props.count === 0) {
    flippedClass = '';
  }

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
