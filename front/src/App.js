import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
    <div className="mx-auto">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
