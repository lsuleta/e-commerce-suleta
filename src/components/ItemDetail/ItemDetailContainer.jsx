import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { products } from '../../products'
import {useParams} from "react-router-dom"
const ItemDetailContainer = () => {

    const {id} = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        let encontrar = products.find(prod => prod.id === +id)
        setProduct(encontrar)
    }, [id])

    console.log(product)
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer