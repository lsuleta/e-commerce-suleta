import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'
import { db } from "../../firebaseConfig";
import {getDoc, collection, doc} from "firebase/firestore"

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const {cart, agregarAlCarrito, getQuantityById} = useContext(CartContext)

  useEffect(() => {
    const itemCollection = collection(db, "products")
    const refDoc = doc(itemCollection, id)
    getDoc(refDoc).then(res => setProduct({
      ...res.data(),
      id: res.id
    })).catch(err => console.log(err))
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    agregarAlCarrito(data)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se agregó correctamente',
      showConfirmButton: true,
      timer: 1500
    })
  };

  let cantidadTotal = getQuantityById(product.id)

  return <ItemDetail product={product} onAdd={onAdd} cantidadTotal={cantidadTotal} cart={cart} />;
};

export default ItemDetailContainer;
