import React from 'react'
import './assets/css/App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from './assets/components/ScrollToTop';

import Nomado from './Nomado.jsx';
import Mobius from './Mobius.jsx';
import Redwood from './Redwood.jsx';

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
          <Route path='/nomado' element={<Nomado />} />
          <Route path='/mobius' element={<Mobius />} />
          <Route path='/redwood' element={<Redwood />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
