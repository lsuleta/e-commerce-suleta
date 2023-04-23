import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CounterContainer from "../Counter/CounterContainer";


const ItemDetail = ({ product }) => {
  return (
    <Box sx={{ flexGrow: 1 }} key={product.id}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={3} sx={{ width: "200px", height: "200px" }}>
          <img
            style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
            src={product.img}
            alt={product.titulo}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">{product.titulo}</Typography>
          <Typography variant="body2">{product.descripcion}</Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            ${product.precio}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <CounterContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
