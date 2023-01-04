import React from "react"
import { HashRouter, Route, Routes } from 'react-router-dom';
import GameBoard from "./components/game-board"
import Home from "./home";

export default function App(){


  return (
    <>
      <div>
        <h1>Memory Challenge</h1>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game-board/easy" element={<div>{<GameBoard level='easy' />}</div>} />
            <Route path="/game-board/medium" element={<div>{<GameBoard level='medium' />}</div>} />
            <Route path="/game-board/hard" element={<div>{<GameBoard level='hard' />}</div>} />
        </Routes>
      </div>
    </>
  )
}
