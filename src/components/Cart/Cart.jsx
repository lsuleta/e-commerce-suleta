import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, deleteProductById, total, clearCartAlert, navigate }) => {
  return (
    <div>
      <Typography variant="h3" align="center">
        Carrito
      </Typography>
      {cart.map((product) => {
        return (
          <Box sx={{ flexGrow: 1 }} key={product.id}>
            <Grid
              container
              spacing={2}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                sx={{ width: "200px", height: "200px" }}
              >
                <img
                  style={{
                    objectFit: "scale-down",
                    width: "100%",
                    height: "100%",
                  }}
                  src={product.img}
                  alt={product.titulo}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h5" align="center">
                  {product.titulo}
                </Typography>
                <Typography variant="body2" align="center">
                  ${product.precio}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 700 }}
                  align="center"
                >
                  Unidades: {product.quantity}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => deleteProductById(product.id)}
                >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          </Box>
        );
      })}
      {cart.length > 0 ? (
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          <Button
            onClick={clearCartAlert}
            size="small"
            color="primary"
            variant="contained"
          >
            Limpiar carrito
          </Button>
          <Button size="small" color="primary" variant="contained" onClick={() => navigate("/checkout")}>
            Comprar
          </Button>
        </div>
      ) : (
        <Link to="/" style={{display: "flex", justifyContent: "center"}}>
          <Button size="small" color="primary" variant="contained">
            Faltan agregar productos
          </Button>
        </Link>
      )}

      <Typography variant="h5" align="center">
        El total del carrito es: ${total}
      </Typography>
    </div>
  );
};

export default Cart;
