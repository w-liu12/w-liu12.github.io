import React from 'react'
import './assets/css/App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './assets/components/ScrollToTop';

function App() {
  useEffect (() => {
    window.scrollTo(0,0);
}, []);
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='*' element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
