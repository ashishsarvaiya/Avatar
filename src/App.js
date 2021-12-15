import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonListing from "./container/PersonListing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PersonListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
