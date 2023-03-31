import React from 'react'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    let saludo = "Bienvenido"

  return (
    <div>
        <ItemList saludo = {saludo} />
    </div>
  )
}
