import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { nombre } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products")

    if(nombre){
      const itemsCollectionFiltered = query(itemCollection, where("categoria", "==", nombre))
      consulta = itemsCollectionFiltered
    }else{
      consulta = itemCollection
    }
    
    

    getDocs(consulta).then(res => {
      const products = res.docs.map(product => {
        return {
          ...product.data(),
          id: product.id
          
        }
      })
      setItems(products)
    })
    .catch(err => console.log(err))
  }, [nombre]);

  

  return (
    <div>
      {items.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "12rem",
          }}
        >
          <PuffLoader color="blue" size={70} />
        </div>
      )}
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
