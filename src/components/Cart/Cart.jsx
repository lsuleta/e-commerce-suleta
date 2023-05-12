import { Button } from '@mui/material'
import React from 'react'

const Cart = ({cart, clearCart, deleteProductById, total}) => {
  return (
    <div>
      <h1>Carrito</h1>
        {
          cart.map(product => {
            return <div key={product.id} style={{border: "2px solid black"}}>
              <h3>{product.titulo}</h3>
              <h4>{product.precio}</h4>
              <h4>{product.quantity}</h4>
              <Button size="small" color="primary" variant="contained" onClick={()=>deleteProductById(product.id)}>Eliminar</Button>
            </div>
          })
        }
        <Button onClick={clearCart} size="small" color="primary" variant="contained">Limpiar carrito</Button>
        <h1>El total del carrito es: ${total}</h1>
    </div>
  )
}

export default Cart