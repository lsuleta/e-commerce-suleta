import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const FormCheckout = ({handleSubmit, handleChange, errors}) => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={2} flex justifyContent={"center"}>
          <Grid item xs={7}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              onChange={handleChange}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="outlined-basic"
              label="Teléfono"
              variant="outlined"
              fullWidth
              name="telefono"
              onChange={handleChange}
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
              Comprar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormCheckout;
