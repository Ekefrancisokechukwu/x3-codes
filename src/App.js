import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Gradutes, Programs, About, Error } from "./components/pages";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/programs" element={<Programs />} />
        <Route path="/graduates" element={<Gradutes />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
