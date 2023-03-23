import "./App.css";
import { Login } from "./Login";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Footer } from "./Footer";


function App() {
  return (
    <div className="App">
      <Login />
      <h1>Esto es propio de app</h1>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
