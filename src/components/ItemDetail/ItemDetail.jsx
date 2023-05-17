import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CounterContainer from "../Counter/CounterContainer";
import { Link } from "react-router-dom";

const ItemDetail = ({ product, onAdd, cantidadTotal, cart }) => {
  return (
    <Box sx={{ flexGrow: 1 }} key={product.id}>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} md={12} sx={{ width: "200px", height: "200px" }}>
          <img
            style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
            src={product.img}
            alt={product.titulo}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" align="center">
            {product.titulo}
          </Typography>
          <Typography variant="body2" align="center">
            {product.descripcion}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }} align="center">
            ${product.precio}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {product.stock > 0 ? (
            <CounterContainer
              stock={product.stock}
              onAdd={onAdd}
              initial={cantidadTotal}
            />
          ) : (
            <Typography variant="h3" align="center">
              No hay stock.
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} md={6} align="center">
          <Link to="/">
            <Button size="small" color="primary" variant="contained">
              Regresar
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6} align="center">
          {cart.length > 0 && (
            <Link to="/cart">
              <Button size="small" color="primary" variant="contained">
                Terminar la compra
              </Button>
            </Link>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemDetail;
