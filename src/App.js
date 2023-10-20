import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./components/cart/Cart";
import ProductDetail from "./pages/productdetail/ProductDetail";
import { ContextShopProvider } from "./context/ContextShop";
import Footer from "./components/footer/Footer";
import Allitems from "./pages/allItems/Allitems";
import HorizScroll from "./pages/customsneakers/HorizScroll";
function App() {
  return (
    <ContextShopProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/product/:productId/:productName"
            element={<ProductDetail />}
          ></Route>
          <Route path="/allItems" element={<Allitems/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </ContextShopProvider>
    //<HorizScroll/>
  );
}

export default App;
