import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import Insurance from './pages/Insurance';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/insurance' element= {<Insurance />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
