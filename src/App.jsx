import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import "./styles/utils.css";
import Topbar from "./pages/components/Topbar";
import Footer from "./pages/components/Footer";
import {Homepage} from "./pages/Homepage";
import Tours from "./pages/Tours";
import {Gallery} from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TourInfo from "./pages/TourInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Topbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/tours/:slug" element={<TourInfo />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
