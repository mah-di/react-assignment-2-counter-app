import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setCount((prev) => prev - 1)
  }

  const handleReset = () => {
    setCount((prev) => prev = 0)
  }

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={handleIncrement} disabled={count == 5 ? true : false} className="btn card__btn">+</button>
          <button onClick={handleDecrement} disabled={count == -5 ? true : false} className="btn card__btn">-</button>
          <button onClick={handleReset} disabled={count == 0 ? true : false} className="btn card__btn">0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
