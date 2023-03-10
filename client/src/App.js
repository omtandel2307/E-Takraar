import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UseModel from "./pages/UseModel";
import Register from "./pages/Register";
import MyComplaints from "./pages/MyComplaints";
import AdminComplaints from "./pages/AdminComplaints";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usemodel" element={<UseModel />} />
          <Route path="/registercomplaint" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycomplaints" element={<MyComplaints />} />
          <Route path="/allcomplaints" element={<AdminComplaints />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
