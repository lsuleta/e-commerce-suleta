import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div >
            <img
              src="riccia.jpg"
              alt="logo de la tienda"
              
            />
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button variant="contained">Shampoo</Button>
            <Button variant="contained">Acondicionador</Button>
            <Button variant="contained">Baño Capilar</Button>
            <Button variant="contained">Sérum Multipropósito</Button>
            <Button variant="contained">Loción Capilar</Button>
          </Typography>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
