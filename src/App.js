// import { Card } from "./components/card";
import "./App.css";
import Character from "./pages/character";
import Home from "./pages/home";
// import { NarutoData } from "./service";
// import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/character" element={<Character />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
