import React from "react"
import GameBoard from "./components/game-board"

export default function App(){
  return (
    <>
      <div>
        <h1>Memory Challenge</h1>
        <h2 className="text-center">Choose a level of difficulty:</h2>
      </div>
      <div className="row">
          <a className="difficulty-button">
            Easy
          </a>
          <a className="difficulty-button">
            Medium
          </a>
          <a className="difficulty-button">
            Hard
          </a>
      </div>
      <div>
          { GameBoard() }
      </div>
    </>
  )
}
