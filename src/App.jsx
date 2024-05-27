import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
