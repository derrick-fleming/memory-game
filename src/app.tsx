import React from "react"

const cardShapes: string[] = [
  'heart', 'heart', 'star', 'star', 'circle', 'circle', 'check', 'check', 'minus', 'minus', 'plus', 'plus'];

export default function App(){
  return (
    <>
      <div>
        <h1>Memory Challenge</h1>
      </div>
      <div className='row'>
          { Cards() }
      </div>
    </>
  )
}

const Cards = function() {
  const cardTypes = cardShapes.map((card, index)=> {
    return (
    <div className='card col-4' id={card} key={index}>
    </div> )})
  return cardTypes;
  }
