import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Sketch from "react-p5";
import P5Sketch from "./components/P5Sketch";

function App() {
  return (
    <div className="background">
      <P5Sketch />
      <div className="app grid gap-16 text-2xl p-4 font-grotesk text-[#a8b2d1] xl:p-8 xl:text-2xl xl:px-12">
        <Header />
        {/* <Nav /> */}
        <main className="main-content container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
