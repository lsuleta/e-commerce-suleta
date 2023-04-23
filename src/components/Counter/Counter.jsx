import { Button } from "@mui/material";
import React from "react";

const Counter = ({ contador, sumar, restar }) => {
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
    </div>
  );
};

export default Counter;
