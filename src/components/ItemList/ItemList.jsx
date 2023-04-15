import React from 'react'

export const ItemList = ({product}) => {
  return (
    <div>
      {product.producto} - ${product.precio} - {product.linea}
    </div>
  )
}
