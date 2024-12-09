import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
