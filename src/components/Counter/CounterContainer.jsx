import React, { useEffect } from "react";
import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, initial=1 }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial)
  }, [initial])
  
  const sumar = () => {
    contador < stock && setContador(contador + 1);
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div>
      <Counter
        contador={contador}
        sumar={sumar}
        restar={restar}
        onAdd={onAdd}
      />
    </div>
  );
};

export default CounterContainer;
