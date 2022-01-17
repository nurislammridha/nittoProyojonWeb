import "../src/asset/css/main.css";
import "../src/asset/css/mobile.css";
import Footer from "./modules/footer/Footer";
import Cart from "./modules/cart/Cart";
import Header from "./modules/header/Header";
import AllProducts from "./modules/allProducts/AllProducts";
import HomeProductsContainer from "./modules/homeProducts/views/HomeProductsContainer";
import { Routes, Route, Link } from "react-router-dom";
import PhoneNumberContainer from "./modules/auth/views/PhoneNumberContainer";
import PasswordContainer from "./modules/auth/views/PasswordContainer";
import UserDetailsContainer from "./modules/auth/views/UserDetailsContainer";
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
        <Route path="all-products/:id" element={<AllProducts />} />
        <Route path="phone-number" element={<PhoneNumberContainer />} />
        <Route path="password" element={<PasswordContainer />} />
        <Route path="user-details" element={<UserDetailsContainer />} />
      </Routes>
      <Footer />
      <Cart />
    </>
  );
}

export default App;
