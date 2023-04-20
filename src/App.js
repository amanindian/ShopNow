import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Main/NavBar";
import News from "./Components/Main/News";
import Footer from "./Components/Main/Footer";
import SingleProduct from "./Components/Main/SingleProduct";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import Copyright from "./Components/Main/Copyright";

function App() {
  let [ClickedData, setClickedData] = useState(() => {
    if (localStorage.ClickedData) {
      return JSON.parse(localStorage.ClickedData);
    } else {
      return {};
    }
  });

  useEffect(() => {
    localStorage.ClickedData = JSON.stringify(ClickedData);
  }, [ClickedData]);

  //For Cart
  const [NewCartProduct, setNewCartProduct] = useState([])

  // Total Amount
  const [totalAmount, setTotalAmount] = useState(() => {
    if (localStorage.totalAmount) {
      return JSON.parse(localStorage.totalAmount);
    } else {
      return 0;
    }
  })
  useEffect(() => {
    localStorage.totalAmount = JSON.stringify(totalAmount);
  }, [totalAmount]);


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home setClickedData={setClickedData} setNewCartProduct={setNewCartProduct} NewCartProduct={NewCartProduct} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />} />
          <Route
            path="/Shop"
            element={<Shop setClickedData={setClickedData} setNewCartProduct={setNewCartProduct} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />}
          />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart NewCartProduct={NewCartProduct} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />} />
          <Route
            path="/SingleProduct"
            element={<SingleProduct ClickedData={ClickedData} setNewCartProduct={setNewCartProduct} totalAmount={totalAmount} setTotalAmount={setTotalAmount} />}
          />
        </Routes>
        <News />
        <Footer />
        <Copyright />
      </Router>
    </>
  );
}

export default App;