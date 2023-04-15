import * as React from "react";
import Button from "@mui/material/Button";
import { CartWidget } from "../CartWidget/CartWidget";
import "./navbar.css"
import { ProductsContext } from "../../App";
import { lineas } from "../../App";
export const Navbar = () => {
  const {setFilter} = React.useContext(ProductsContext)

  return (
      <div className="navbar-container">
          <div >
            <img
              src="riccia.jpg"
              alt="logo de la tienda"
            />
          </div>
          <div className="nav-links">
            {lineas.map(linea=>{
              return <Button onClick={()=> setFilter(linea)} key={linea} variant="contained">{linea}</Button>
            })}
          </div>
          <CartWidget />
      </div>
      
  );
};
