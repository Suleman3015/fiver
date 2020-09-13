import React from "react";
import "./App.css";
import CenterBody from "./components/centerBody";
import Head from "./components/Head";
import Cards from "./components/cards";

function App() {
  return (
    <div>
      <Head />
      <CenterBody />
      <Cards />
    </div>
  );
}

export default App;
