import React from 'react'
import icon from '../images/icons.png'

const Nav = () => {
  return (
  <div style={{ backgroundColor: '#030812', height: '80px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center',borderBottom:"2px white solid" }}>
    <div className="ml-5" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={icon} width="50px" height="50px" />
      <span className="ml-3 text-white">Kelompok 4</span>
      <div className="ml-auto ">
        <button className="btn btn-outline " style={{marginLeft:"31cm"}}>Logout</button>
      </div>
    </div>
  </div>
  )
}

export default Nav