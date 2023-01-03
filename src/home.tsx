import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2 className="text-center">Choose a level of difficulty:</h2>
      <div className="row">
          <Link className="difficulty-button" to={'/game-board-easy'}>
            Easy
          </Link>
        <Link className="difficulty-button" to={'/game-board-medium'}>
            Medium
          </Link>
          <Link className="difficulty-button" to={'/game-board-hard'}>
            Hard
          </Link>
      </div>
    </>
  )
}

export default Home;
