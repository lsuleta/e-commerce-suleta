import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";

export const CartWidget = () => {
  return (
    <div style={{ display: "flex" }}>
      <ShoppingCartIcon />
      <Typography variant="subtitle2">0</Typography>
    </div>
  );
};
