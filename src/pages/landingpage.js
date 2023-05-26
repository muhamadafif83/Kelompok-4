import React from 'react'
import icon from '../images/icons.png'

const Landingpage = () => {
  return (
    <div className="place-content-evenly bg-indigo-900 h-screen" style={{ backgroundColor: '#000E2B' }}>
  <div style={{ backgroundColor: '#030812', height: '80px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
    <div className="ml-5" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={icon} alt='Icon' width="50px" height="50px" />
      <span className="ml-3 text-white">Kelompok 4</span>
      <div className="ml-auto">
        <button className="btn btn-outline">Login</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Landingpage