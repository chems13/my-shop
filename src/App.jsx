import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Card from "./pages/Card";
import Category from "./pages/Category";
import ProduitDetail from "./pages/ProduitDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/ProduitDetail" element={<ProduitDetail />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
