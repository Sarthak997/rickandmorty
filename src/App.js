import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
