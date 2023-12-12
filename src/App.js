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
import { DataProvider } from "./Context/DataContext";
import { CartData } from "./Context/CartData";
import { BlogData } from "./Context/BlogData";

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
    <BlogData>
      <CartData>
        <DataProvider>
          <Router>
            <NavBar />
            <Routes>
              <Route
                exact
                path="/"
                element={<Home setClickedData={setClickedData} />}
              />
              <Route
                path="/Shop"
                element={<Shop setClickedData={setClickedData} />}
              />
              <Route path="/Blogs" element={<Blog />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Cart" element={<Cart />} />
              <Route
                path="/SingleProduct"
                element={<SingleProduct ClickedData={ClickedData} />}
              />
            </Routes>
            <News />
            <Footer />
            <Copyright />
          </Router>
        </DataProvider>
      </CartData>
    </BlogData>
  );
}

export default App;
