import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from './Pages/shop/shop'
import Basket from "./Pages/basket/basket";
import Contact from "./Pages/contact/contact";


function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
          <Route path="/" element={<Shop />} /> 
          <Route path="/cart" element={<Basket />}/>
          <Route path="/cart" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
