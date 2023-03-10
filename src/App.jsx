import { useState } from "react";
import "./App.css";
import useIcons from "./useIcons";
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
  const { twitter, linkedin, github } = useIcons();

  return (
    <div className="background">
      <P5Sketch />
      <div className="app grid gap-20 text-xl  font-urbanist text-lighter-slate xl:text-2xl ">
        <Header />
        {/* <Nav /> */}
        <main className="main w-[90%] m-auto xl:px-20 relative">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <div className="social">
            <a href="">{twitter}</a>
            <a href="">{linkedin}</a>
            <a href="">{github}</a>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
