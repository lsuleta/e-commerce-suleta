import "./App.css";
import { ItemList } from "./components/ItemList/ItemList";
import { Navbar } from "./components/Nabvar/Navbar";



function App() {

  let saludo = "hola bienvenido"

  return (
    <div className="App">
      <Navbar color="blue"/>
      <ItemList saludo={saludo} />
      
      
    </div>
  );
}

export default App;
