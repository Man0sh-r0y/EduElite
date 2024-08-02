import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Error from "./pages/Error";
import VerifyEmail from "./pages/VerifyEmail";
import Home from "./pages/Home" // import thr Home page
import "./App.css";

function App() {

  return (
    <div className="w-screen min-h-screen flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<PrivateRoute> <Signup /> </PrivateRoute>}/>
        <Route path="/login" element={<PrivateRoute> <Login /></PrivateRoute>}/>
        <Route path="/verify-email" element={<VerifyEmail />}/>
        <Route path="*" element={<Error />}/> {/* for any unmatched routes */}
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App;
