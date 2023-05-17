import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id)
    if(existe){
      let newCart = cart.map((e) => {
        if(e.id === producto.id){
          return {
            ...e, quantity: producto.quantity
          }
        }else{
          return e
        }
      })
      setCart(newCart)
    }else{

      setCart([...cart, producto])
    }
  };

  const clearCart = () => {
    setCart([])
  }

  const deleteProductById = (id) => {
    const productosFiltrados = cart.filter((e) => e.id !== id)
    setCart(productosFiltrados)
  }

  const isInCart = (id) => {
    const existe = cart.some((e) => e.id === id)
    return existe
  }

  const getTotalPrice = () => {
    let total = cart.reduce((acumulador, e) => {
      return acumulador + e.precio * e.quantity
    }, 0)
    
    return total
  }

  const getTotalQuantity = () => {
    let total = cart.reduce((acumulador, e) => {
      return acumulador + e.quantity
    }, 0)
    return total
  }

  const getQuantityById = (id) => {
    let product = cart.find((e) => e.id === id)
    return product?.quantity
  }

  let data = { cart, agregarAlCarrito, clearCart, deleteProductById, getTotalPrice, getTotalQuantity, getQuantityById };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
