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

import { Link } from "react-router-dom";

const ItemList = ({ items }) => {

  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        minHeight: "90vh",
        padding: "40px",
        gap: "2rem",
      }}
    >
      {items.map((item) => {
        return (
          <Card sx={{ width: 300, height: 350 }} key={item.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.titulo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" align="center">
                  {item.titulo}
                </Typography>
                <Typography variant="body2" align="center">{item.descripcion}</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }} align="center">
                  ${item.precio}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Link to={`/itemDetail/${item.id}`}>
                <Button size="small" color="primary" variant="contained">
                  Ver más
                </Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
