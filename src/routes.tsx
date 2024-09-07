import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

const AppRoutes: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRoutes;
