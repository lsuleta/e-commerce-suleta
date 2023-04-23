import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        minHeight: "90vh",
        padding: "40px",
        gap: "2rem"
      }}
    >
      {items.map((item) => {
        return (
          <Card sx={{ width: 300 }} key={item.id}>
            <CardActionArea sx={{height: 300}}>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.titulo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.titulo}
                </Typography>
                <Typography variant="body2">{item.descripcion}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  ${item.precio}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "center", alignItems: "center" }}>
              <Button size="small" color="primary" variant="contained">
                Ver más
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
