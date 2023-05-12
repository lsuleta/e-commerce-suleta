import { Button } from "@mui/material";
import React from "react";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button size="small" color="primary" variant="contained" onClick={restar}>
        -
      </Button>
      <h3>{contador}</h3>
      <Button size="small" color="primary" variant="contained" onClick={sumar}>
        +
      </Button>
      <Button size="small" color="primary" variant="contained" onClick={()=>onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
