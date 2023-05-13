import React from 'react';
import icon from '../images/icons.png';
import foto from '../images/landing.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const landingpage = () => {
  return (
    <div className="place-content-evenly h-screen w-screen" style={{ backgroundColor: '#000E2B' }}>
      {/* navbar */}
      <div style={{ backgroundColor: '#030812', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px',borderBottom:"2px white solid" }}>
        <div className="ml-5" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={icon} width="50px" height="50px" />
          <span className="ml-3 text-white" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Kelompok 4</span>
        </div>
        <Link to="/pages/ProfileSiswa" className="btn btn-outline" style={{ fontWeight: 'bold', marginRight: '10px' }}>Login</Link>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 py-24 mt-10 mb-5 flex justify-center items-center">
        <div className="mr-7">
          <h1 className="font-bold text-4xl pt-10">
            Kelompok 4
          </h1>
          <div className="font-normal text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae elit nec felis varius bibendum. Quisque venenatis mi et feugiat eleifend. Nunc vitae mi auctor, efficitur purus sed, varius leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Maecenas viverra fermentum ullamcorper. Duis interdum aliquam velit, sed lacinia sapien eleifend ac. Proin in justo augue. Fusce eu mi sed nisi consectetur auctor sed ut dui. Aliquam erat volutpat.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={foto} alt="ilustration-laslesvpn" className="max-w-screen-lg h-auto" />
        </div>
      </div>
    </div>
  );
};

export default landingpage;
