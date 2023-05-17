import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
      <div className="h-20 flex items-center justify-center">
        Logo
      </div>
      <div className="flex flex-col flex-1">
        <a href="a" className="p-4 hover:bg-gray-700">Home</a>
        <a href="a" className="p-4 hover:bg-gray-700">Profile</a>
        <a href="o" className="p-4 hover:bg-gray-700">Materi</a>
        <a href="a" className="p-4 hover:bg-gray-700">Tugas</a>
        <a href="y" className="p-4 hover:bg-gray-700">Log Out</a>
      </div>
    </div>
  );
};

export default Sidebar;