import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
      <div className="h-20 flex items-center justify-center">
        Logo
      </div>
      <div className="flex flex-col flex-1">
        <a href="#" className="p-4 hover:bg-gray-700">Home</a>
        <a href="#" className="p-4 hover:bg-gray-700">Profile</a>
        <a href="#" className="p-4 hover:bg-gray-700">Menu 3</a>
        <a href="#" className="p-4 hover:bg-gray-700">Menu 4</a>
      </div>
    </div>
  );
};

export default Sidebar;
