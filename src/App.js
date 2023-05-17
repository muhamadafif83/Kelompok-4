import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tugasindo from './pages/Daftar-Tugas';

const App = () => {
  document.title = "Tugas Siswua";
    return (
    <div className="flex">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bindo' element={<Tugasindo />} />

        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
