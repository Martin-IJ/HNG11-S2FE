import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MobileCart from "./components/MobileCart";
import Checkout from "./components/Checkout";
import CartPage from "./components/CartPage";

function App() {
  return (
    <div className="bg-primary-light text-tertiary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MobileCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/view-cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
