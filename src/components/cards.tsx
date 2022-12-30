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
      <button className='card col-4' id={card} key={index}>
      </button>)
  })
  return cardTypes;
}

export default Cards;
