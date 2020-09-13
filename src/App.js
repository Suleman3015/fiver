import React from "react";
import "./App.css";
import CenterBody from "./components/centerBody";
import Head from "./components/Head";
import Cards from "./components/cards";
import Footer from "./components/Footer";
import Nav from "./components/naaav";
import Ft from "./components/Footer2";
function App() {
  return (
    <div>
      <Nav />
      <Head />
      <CenterBody />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
