import React from 'react'
import icon from '../images/icons.png'



const Nav = () => {
  return (
  <div style={{ backgroundColor: '#030812', height: '80px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center',borderBottom:"2px white solid" }}>
    {/* navbar */}
    <div style={{ backgroundColor: '#030812', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px',borderBottom:"2px white solid" }}>
        <div className="ml-5" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={icon} alt='icon' width="50px" height="50px" />
          <span className="ml-3 text-white" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Kelompok 4</span>
        </div>
      </div>
  </div>
  )
}

export default Nav