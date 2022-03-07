import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
