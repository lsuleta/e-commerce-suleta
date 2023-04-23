import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Box, Button, Grid } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={12} md={3} sx={{width: "120px", height: "120px"}}>
            <img
              style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
              src="https://res.cloudinary.com/dizrgzxfl/image/upload/v1680298055/riccia_omcfpf.jpg"
              alt="logo de la tienda"
            />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="text" size="large">
            all
          </Button>
          <Button variant="text" size="large">
            hair
          </Button>
          <Button variant="text" size="large">
            skin
          </Button>
          <Button variant="text" size="large">
            creme
          </Button>
          <Button variant="text" size="large">
            relax
          </Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <CartWidget />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
