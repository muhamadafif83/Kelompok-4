import React from "react";
import profile from "../images/profile2.png";
import materi from "../images/materi2.png";
import tugas from "../images/tugas2.png";
import logout from "../images/logout2.png";

function Homepage() {
  return (
    <div className="flex justify-between">
      <div className="w-78 h-82 space-y-2">
        <img className="w-40 h-40" src={profile} alt="profile" />
        <p className="w-48 h-18 text-center">PROFILE</p>
      </div>
      <div className="w-78 h-82 space-y-2">
        <img className="w-40 h-40" src={materi} alt="materi" />
        <p className="w-48 h-18 text-center">MATERI</p>
      </div>
      <div className="w-78 h-82 space-y-2">
        <img className="w-40 h-40" src={tugas} alt="tugas" />
        <p className="w-48 h-18 text-center">TUGAS</p>
      </div>
      <div className="w-78 h-82 space-y-2">
        <img className="w-40 h-40" src={logout} alt="logout" />
        <p className="w-48 h-18 text-center">LOGOUT</p>
      </div>
    </div>
  );
}

export default Homepage;
