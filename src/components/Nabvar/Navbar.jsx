import React, { useContext } from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Box, Button, Grid } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const Navbar = () => {

  const {cart} = useContext(CartContext)

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} md={3} sx={{ width: "120px", height: "120px" }}>
            <Link to="/">
              <img
                style={{
                  objectFit: "scale-down",
                  width: "100%",
                  height: "100%",
                }}
                src="https://res.cloudinary.com/dizrgzxfl/image/upload/v1680298055/riccia_omcfpf.jpg"
                alt="logo de la tienda"
              />
            </Link>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
            <Link to="/">
              <Button variant="text" size="large">
                all
              </Button>
            </Link>
            <Link to="/categoria/Hair">
              <Button variant="text" size="large">
                hair
              </Button>
            </Link>
            <Link to="/categoria/Skin">
              <Button variant="text" size="large">
                skin
              </Button>
            </Link>
            <Link to="/categoria/Creme">
              <Button variant="text" size="large">
                creme
              </Button>
            </Link>
            <Link to="/categoria/Relax">
              <Button variant="text" size="large">
                relax
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            {
              cart.length > 0 && <CartWidget />
            }
          </Grid>
        </Grid>
      </Box>
      <Outlet />
    </Box>
  );
};

export default Navbar;
