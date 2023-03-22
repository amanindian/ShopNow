import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Main/NavBar";
import News from "./Components/Main/News";
import Footer from "./Components/Main/Footer";
import Product from "./Components/Main/Product";
import Blog from "./Components/Blog/Blog";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

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

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home setClickedData={setClickedData} />} />
          <Route
            path="/Shop"
            element={<Shop setClickedData={setClickedData} />}
          />
          <Route path="/Blogs" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/ShowProductDetails"
            element={<Product ClickedData={ClickedData} />}
          />
        </Routes>
        <News />
        <Footer />
      </Router>
    </>
  );
}

export default App;
