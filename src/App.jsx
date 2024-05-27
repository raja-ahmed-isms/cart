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
      {/* <Hero /> */}
      <div className="p-4">
        {/* Add your main content here */}
        <h1 className="text-2xl font-bold">Welcome to MyStore</h1>
        <Home />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
