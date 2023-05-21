import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tugasindo from './pages/Bind';
import TugasMtk from './pages/Mtk';
import Tugasinggris from './pages/Binggris';

const App = () => {
  document.title = "Tugas Siswa";
    return (
    <div className="flex">
      <Router>
        <Routes>
          <Route path='/tugas' element={<Home />} />
          <Route path='/bindo' element={<Tugasindo />} />
          <Route path='/mtk' element={<TugasMtk />} />
          <Route path='/ing' element={<Tugasinggris />} />
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
