import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tugas from './pages/Home';
import Tugasindo from './pages/Bind';
import TugasMtk from './pages/Mtk';
import Tugasinggris from './pages/Binggris';
import TugasBdaer from './pages/Bdaerah';
import TugasPKN from './pages/PPKN';
import TugasMobile from './pages/Mobile';
import TugasPHP from './pages/PHP';
import TugasJava from './pages/Java';
import TugasSenibudaya from './pages/Sebud';
import Landingpage from './pages/landingpage';
import Materi from "./pages/materiSiswa";
import Profile from './pages/ProfileSiswa';
import Homepage from './pages/homepage';

const App = () => {
  document.title = "Tugas Siswa";
  return (
    <div className="flex">
      <Router>
        <Routes>
          <Route path='/tugas' element={<Tugas />} />
          <Route path='/materisiswa' element={<Materi />} />
          <Route path='/' element={<Landingpage />} />
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/bindo' element={<Tugasindo />} />
          <Route path='/Profile' element={<Profile />} />
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
