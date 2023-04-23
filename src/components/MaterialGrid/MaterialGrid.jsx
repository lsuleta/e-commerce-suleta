import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const MaterialGrid = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography variant="h3">hola </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h3">hola </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h3">hola </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h3">hola </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MaterialGrid;
