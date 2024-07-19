import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home" // import thr Home page
import "./App.css";

function App() {

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App;
