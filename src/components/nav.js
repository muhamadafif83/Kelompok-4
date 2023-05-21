import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
      <div className="h-20 flex items-center justify-center">
        Logo
      </div>
      <div className="flex flex-col flex-1">
        <a href="#/" className="p-4 hover:bg-gray-700">Home</a>
        <a href="#/" className="p-4 hover:bg-gray-700">Profile</a>
        <a href="#/" className="p-4 hover:bg-gray-700">Materi</a>
        <a href="/tugas" className="p-4 hover:bg-gray-700 border-b border-gray-400 hover:border-white">Tugas</a>
        <a href="#/" className="p-4 hover:bg-gray-700">Log Out</a>
      </div>
    </div>
  );
};

export default Sidebar;