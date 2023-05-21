import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tugasindo from './pages/Bind';
import TugasMtk from './pages/Mtk';
import Tugasinggris from './pages/Binggris';
import TugasBdaer from './pages/Bdaerah';
import TugasPKN from './pages/PPKN';
import TugasMobile from './pages/Mobile';
import TugasPHP from './pages/PHP';
import TugasJava from './pages/Java';
import TugasSenibudaya from './pages/Sebud';

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
          <Route path='/daerah' element={<TugasBdaer />} />
          <Route path='/ppkn' element={<TugasPKN />} />
          <Route path='/sebud' element={<TugasSenibudaya />} />
          <Route path='/mobile' element={<TugasMobile />} />
          <Route path='/php' element={<TugasPHP />} />
          <Route path='/java' element={<TugasJava />} />
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
