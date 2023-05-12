import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const {agregarAlCarrito} = useContext(CartContext)

  useEffect(() => {
    let encontrar = products.find((prod) => prod.id === +id);
    setProduct(encontrar);
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    agregarAlCarrito(data)
    // console.log(`se agregaron al carrito ${cantidad} cantidad/es`);
  };
  return <ItemDetail product={product} onAdd={onAdd} />;
};

export default ItemDetailContainer;
