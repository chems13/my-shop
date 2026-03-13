import { BrowserRouter } from "react-router-dom";
import "bootstrap";
import "./App.css";
import Home from "./pages/Home";
import ProduitDetail from "./pages/ProduitDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Category" element={<Category />} />
          <Route path="ProductDetail" element={<ProductDetail />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Chekout" element={<Chekout />} />
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
