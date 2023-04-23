import React from 'react'
import { useState } from 'react';
import Counter from './Counter';

const CounterContainer = () => {
    const [contador, setContador] = useState(0);

    const sumar = () => {
      setContador(contador + 1);
    };
  
    const restar = () => {
      setContador(contador - 1);
    };
  
  return (
    <div>
        <Counter contador={contador} sumar={sumar} restar={restar}/>
    </div>
  )
}

export default CounterContainer