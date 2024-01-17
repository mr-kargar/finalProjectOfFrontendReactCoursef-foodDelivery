import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnimatedRouts from "./utils/AnimatedRouts";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRouts />
    </BrowserRouter>
  );
}

export default App;
