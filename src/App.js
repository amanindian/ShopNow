import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Products1 from "./Components/Products1";
import Banner1 from "./Components/Banner1";
import Products2 from "./Components/Products2"
import Banner2 from "./Components/Banner2"
import Banner3 from "./Components/Banner3"
import News from "./Components/News"
import Footer from "./Components/Footer.jsx"
import ShopBanner from "./Components/Shop/ShopBanner"
import Product from "./Components/Product"
import Blog from "./Components/Blog"

function App() {
  let [ClickedData, setClickedData] = useState(() => {
    if (localStorage.ClickedData) {
      return JSON.parse(localStorage.ClickedData);
    } else {
      return {};
    }
  });
  const ShowProduct = (e) => {
    let Item = e.target;
    setClickedData({
      ProImage: Item.parentElement.parentElement.getElementsByTagName(`img`)[0]
        .src,
      ProPrice: Item.parentElement.parentElement.getElementsByClassName(
        `proprise`
      )[0].innerHTML,
      ProDescription: Item.parentElement.parentElement.getElementsByClassName(
        `proDesc`
      )[0].innerHTML,
      ProTitle: Item.parentElement.parentElement.getElementsByTagName("h5")[0]
        .innerHTML,
    });
  };

  useEffect(() => {
    localStorage.ClickedData = JSON.stringify(ClickedData);
  }, [ClickedData]);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Feature />
                <Products1 ShowProduct={ShowProduct} />
                <Banner1 />
                <Products2 ShowProduct={ShowProduct} />
                <Banner2 />
                <Banner3 />
              </>
            }
          />

          <Route
            path="/Shop"
            element={
              <>
                <ShopBanner />
                <Products1 ShowProduct={ShowProduct} />
              </>
            }
          />

          <Route
            path="/ShowProductDetails"
            element={<Product ClickedData={ClickedData} />}
          />

          <Route
            path="/Blogs"
            element={<Blog />
            }
          />
        </Routes>
        <News />
        <Footer />
      </Router>
    </>
  );
}

export default App;
