import React, { useContext, useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { ProductsContext } from "../../App";

export const ItemListContainer = () => {
  const { products, filter } = useContext(ProductsContext);
  const [filterProducts, setFilterProducts] = useState([])
  useEffect(()=>{
    if(filter==='All'){
      setFilterProducts(products);
      return
    }
    const newProducts = products.filter(product=> product.linea === filter)
    setFilterProducts(newProducts)
  },[filter,products])
  return (
    <div>
      {filterProducts
            .map((product) => {
              return <ItemList key={product.id} product={product} />;
            })}
    </div>
  );
};
