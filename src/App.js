import "../src/asset/css/main.css";
import "../src/asset/css/mobile.css";
import Footer from "./modules/footer/Footer";
import Cart from "./modules/cart/Cart";
import Header from "./modules/header/Header";
import AllProducts from "./modules/allProducts/AllProducts";
import HomeProductsContainer from "./modules/homeProducts/views/HomeProductsContainer";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  let option = {
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },

      1000: {
        items: 3,
      },
      1300: {
        items: 3,
      },
    },
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeProductsContainer />} />
        <Route path="all-products" element={<AllProducts />} />
      </Routes>
      <Footer />
      <Cart />
    </>
  );
}

export default App;
