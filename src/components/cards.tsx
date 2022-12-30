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
        <div className='flipper'>
          <button className='front card'>
            <h1 className="hidden fa-solid fa-question"></h1>
          </button>
          <button className='card back' id={card}>
            <h1 className={`fa-solid fa-${card}`}></h1>
          </button>
        </div>

      </div>
      )
  })
  return cardTypes;
}

export default Cards;
