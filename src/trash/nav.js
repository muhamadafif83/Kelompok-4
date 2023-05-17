import React from 'react'

function Nav() {
  return (
    <div className="h-screen bg-black text-white w-1/6 flex flex-col  justify-center">
    <img src="" alt="Gambar INI" className="h-50 mb-4 rounded-image" />
    <p>HALO</p>
    <ul className="text-lg">
    <div className='' style={{ borderBottom: '1px solid #ccc' }}></div>
  
      <li className="py-2 hover:text-gray-500 hover:border-sky-400 border-b-2  pt-14"><img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" alt="Home Icon" className="inline-block w-6 h-6 mr-2" />Home</li>
      <li className="py-2 hover:text-gray-500 hover:border-sky-400 border-b-2"><img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" alt="Home Icon" className="inline-block w-6 h-6 mr-2" />Profile</li>
      <li className="py-2 hover:text-gray-500 hover:border-sky-400 border-b-2"><img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" alt="Home Icon" className="inline-block w-6 h-6 mr-2" />Materi</li>
      <li className="py-2 hover:text-gray-500 hover:border-sky-400 border-b-2"><img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" alt="Home Icon" className="inline-block w-6 h-6 mr-2" />Tugas</li>
      <li className="py-2 hover:text-gray-500 hover:border-sky-400 border-b-2"><img src="https://www.freepnglogos.com/uploads/logo-home-png/chimney-home-icon-transparent-1.png" alt="Home Icon" className="inline-block w-6 h-6 mr-2" />LOGOUT</li>
    </ul>
  </div>
  

  )
}

export default Nav


// import React from "react";
// import Content from "../pages/Content";
// import Sidebar from "../pages/nav";

// function Main() {

//     return(
//     <div className="flex">
//         <Sidebar/>
//         <Content/>
//     </div>
//     )

// } 

// export default Main;
