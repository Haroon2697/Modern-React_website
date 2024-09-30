import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'; // Ensure this path is correct

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
