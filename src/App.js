import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import Home from "./Pages/home/home";
import { Shop } from "./Pages/shop/shop";
import { Basket } from "./Pages/basket/basket";
import { Contact } from "./Pages/contact/contact";
import { ShopContextProvider } from "./context/shop-context";
import { Checkout } from "./Pages/checkout/checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
