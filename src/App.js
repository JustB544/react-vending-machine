import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/soda" element={<Soda />}/>
          <Route path="/chips" element={<Chips />}/>
          <Route path="/sardines" element={<Sardines />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
