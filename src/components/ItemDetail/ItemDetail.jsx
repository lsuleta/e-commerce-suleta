import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CounterContainer from "../Counter/CounterContainer";
import { Link } from "react-router-dom";


const ItemDetail = ({ product, onAdd }) => {
  return (
    <Box sx={{ flexGrow: 1 }} key={product.id}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", alignItems: "center"}}
      >
        <Grid item xs={12} md={3} sx={{ width: "200px", height: "200px" }}>
          <img
            style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
            src={product.img}
            alt={product.titulo}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5">{product.titulo}</Typography>
          <Typography variant="body2">{product.descripcion}</Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            ${product.precio}
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <CounterContainer stock={product.stock} onAdd={onAdd}/>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link to="/">
            <Button size="small" color="primary" variant="contained">Regresar</Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
