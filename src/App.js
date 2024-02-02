import React, { useEffect } from "react";
import "./App.css";
import sketch from "./sketch";
import p5 from "p5";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Birthday } from "./pages/Birthday";
import { TextPage } from "./pages/TextPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Birthday />} />
          <Route path="/birth" element={<TextPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
