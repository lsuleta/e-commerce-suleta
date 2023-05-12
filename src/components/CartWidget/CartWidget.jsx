import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {getTotalQuantity} = useContext(CartContext)
  let total = getTotalQuantity()
  return (
    <Link to="/cart">
      <div>
        <ShoppingCartIcon />
        <span>{total}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
