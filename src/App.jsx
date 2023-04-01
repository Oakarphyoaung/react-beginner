import React from "react";

import Fake from "./components/Fake";
import Home from "./components/Home";
import Products from "./components/Products";
import Navber from "./components/Navber";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Navber />
      <Products />
      <Footer />
    </div>
  );
};
export default App;
