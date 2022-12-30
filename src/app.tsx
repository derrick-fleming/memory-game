import React from "react"
import Cards from "./components/cards"

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
