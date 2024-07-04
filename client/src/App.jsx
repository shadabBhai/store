import React from "react";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customize from "./pages/Customize";
import Products from "./pages/Products";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
