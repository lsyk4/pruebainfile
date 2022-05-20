import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Pagehome from "./components/page_home";
import Navbar from "./components/navbar";
import PageRegister from "./components/page_register";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Pagehome />} />
                    <Route path="/registrar" element={<PageRegister/>} />
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
