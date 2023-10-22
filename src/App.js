import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Placeholder from './components/Placeholder';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SmoothScroll />} />
      <Route path="/bankruptcy" element={<Placeholder />} />
      <Route path="/commercial disputes" element={<Placeholder />} />
      <Route path="/corporate disputes" element={<Placeholder />} />
      <Route path="/tax disputes" element={<Placeholder />} />
      <Route path="/economic crime" element={<Placeholder />} />
      <Route path="/blog" element={<Placeholder />} />
      <Route path="/contact" element={<Placeholder />} />
      </Routes>
    </Router>
  );
}

export default App;
