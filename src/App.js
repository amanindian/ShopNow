import React from "react";
import { Routes, Route } from "react-router-dom";
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
import PageNotFound from "./Components/Main/PageNotFound";

function App() {
  return (
    <BlogData>
      <CartData>
        <DataProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Blogs" element={<Blog />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/product/:id" Component={SingleProduct} />
          </Routes>
          <News />
          <Footer />
          <Copyright />
        </DataProvider>
      </CartData>
    </BlogData>
  );
}

export default App;
