import React from "react";

const Counter = ( {contador, sumar, restar} ) => {

  return (
    <div>
      <h1>contador</h1>
      <button onClick={sumar}>+</button>
      <h3>{contador}</h3>
      <button onClick={restar}>-</button>
    </div>
  );
};

export default Counter;
