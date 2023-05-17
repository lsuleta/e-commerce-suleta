import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const CartContainer = () => {

  const navigate = useNavigate()

  const {cart, deleteProductById, getTotalPrice, clearCart} = useContext(CartContext)

  let total = getTotalPrice()

  const clearCartAlert = () => {
    Swal.fire({
      title: '¿Seguro que quiere limpiar el carrito?',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Se limpiaron lo productos', '', 'success')
      } 
    })

  }

  return (
    <div>
        <Cart total={total} cart={cart} deleteProductById={deleteProductById} clearCartAlert={clearCartAlert}
        navigate={navigate}/>
    </div>
  )
}

export default CartContainer