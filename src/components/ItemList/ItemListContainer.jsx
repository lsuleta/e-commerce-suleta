import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../products";
import {useParams} from "react-router-dom";

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const {nombre} = useParams()

  useEffect(() => {
    const productsFilter = products.filter(prod => prod.categoria === nombre)

    const tarea = new Promise((resolve, reject) => {
      resolve(nombre ? productsFilter : products);
    });
  
    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [nombre])

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
