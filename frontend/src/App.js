import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import Contactus from "./Pages/CreateProducts";
import SinglePage from "./Components/singlePage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all_products" element={<AllProducts/>}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/page/:id" element={<SinglePage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
