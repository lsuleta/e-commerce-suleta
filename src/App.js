import React, { useState } from "react";
import "./App.css";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { Navbar } from "./components/Nabvar/Navbar";
import products from "./products.json";

export const ProductsContext = React.createContext();

export const lineas = ["All", "Hair", "Skin", "Creme", "Relax"];

function App() {
  const [filter, setFilter] = useState(lineas[0]);
  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, filter, setFilter }}>
        <Navbar />
        <ItemListContainer />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
