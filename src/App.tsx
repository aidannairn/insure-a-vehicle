import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import Insurance from './pages/Insurance';
import QuoteForm from './pages/QuoteForm';
import DriversQuote from './components/DriversQuote/DriversQuote';
import CarsQuote from './components/CarsQuote/CarsQuote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/insurance' element= {<Insurance />} />
        <Route path='/quote' element = {<QuoteForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
