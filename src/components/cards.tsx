import React from "react";
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
      <div key={index}>
        <button className='front card col-4'>
          <h1 className="hidden fa-solid fa-question"></h1>
        </button>
        <button className='back card col-4' id={card}>
          <h1 className={`fa-solid fa-${card}`}></h1>
        </button>
      </div>
      )
  })
  return cardTypes;
}

export default Cards;
