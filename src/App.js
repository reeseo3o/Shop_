// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route exact path='/' element={<ProductList />} />
        <Route exact path='/cart' element={<CartList />} />
      </Routes>
    </div>
  );
}

export default App;
