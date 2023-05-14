import React from 'react'

const Navi = () => {
  return (
  <div style={{ height: '80px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' ,borderBottom:"2px grey solid"}}>
    <div className="ml-5 grid flex-col text-left" style={{ display: 'flex', alignItems: 'center' }}>
      <h1 className="ml-3 text-white" style={{fontWeight: 'bold', fontSize: '22px'}}>Rangga Alif</h1>
      <h1 className="ml-3 text-white" style={{fontWeight: '', fontSize: '12px'}}>Online</h1>
    </div>
  </div>
  )
}

export default Navi