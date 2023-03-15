import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./Pages/home/home"
import Shop from './Pages/shop/shop'
import Basket from "./Pages/basket/basket";
import Contact from "./Pages/contact/contact";


function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/shop" element={<Shop />} /> 
          <Route path="/cart" element={<Basket />}/>
          <Route path="/cart" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
