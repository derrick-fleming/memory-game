import React, {useState, useEffect} from "react";

const Card = function (props: { symbol: string, count: number }) {
  const [flipClass, setFlipClass] = useState(false);

  useEffect(() => {
    if (props.count === 0) {
      setFlipClass(false)
    }
  })

  function handleFlip() {
    setFlipClass(true)
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

export default Card;
