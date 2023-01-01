import React from "react"
import GameBoard from "./components/game-board"

export default function App(){
  return (
    <>
      <div>
        <h1>Memory Challenge</h1>
      </div>
      <div className='row'>
          { GameBoard() }
      </div>
    </>
  )
}
