import "../src/asset/css/main.css";
import "../src/asset/css/mobile.css";
import Categories from "./modules/categories/Categories";
import HeroCarousel from "./modules/heroCarousel/HeroCarousel";
import HomeProducts from "./modules/homeProducts/HomeProducts";
import Footer from "./modules/footer/Footer";
import Cart from "./modules/cart/Cart";
import Header from "./modules/header/Header";
import AllProducts from "./modules/allProducts/AllProducts";
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
      <div className="body">
        <div className="cat_banner">
          <Categories />
          <HeroCarousel />
        </div>
        <div className="border_top">
          <p></p>
        </div>
        <HomeProducts />
      </div>
      {/* <AllProducts /> */}
      <Footer />
      <Cart />
    </>
  );
}

export default App;
