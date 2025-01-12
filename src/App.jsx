import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import "./styles/utils.css";
import Topbar from "./pages/components/Topbar";
import Footer from "./pages/components/Footer";
import Homepage from "./pages/Homepage";
import Tours from "./pages/Tours";

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
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
