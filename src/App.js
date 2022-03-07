import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Post from "./pages/Post";
import Get from "./pages/Get";

import { Provider } from "react-redux";
import store from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="/get" element={<Get />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
