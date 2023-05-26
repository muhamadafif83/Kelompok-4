import React from "react";
import { useNavigate } from "react-router-dom";
import Gambar from "../img/gambar tugas.png"

const Content = () =>{
  const Navigate = useNavigate()

    return(
      <>
    <div className="h-screen w-5/6 flex flex-col justify-center items-center bg-[#0F2443]">
      <h1 className="text-2xl text-white font-bold absolute top-0 left-0 ml-72 mt-8">Luthfi Halimawan</h1>
      <h5 className="text-lg font-small text-white absolute top-1 left-3 ml-72 mt-16">Aktif</h5>
      <hr className="border-blue-700  absolute top-2  ml-1 mt-24" style={{ width: "79%", color: "#66738F", backgroundColor: "#66738F", height: 1, border: "none" }} />
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 "  >
        <button onClick={() => Navigate('/bindo')}  className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" />Bahasa Indonesia<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
        <button onClick={() => Navigate('/mtk')}    className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" /> Matematika<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
        <button onClick={() => Navigate('/ing')}    className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" />Bahasa Inggris<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
        <button onClick={() => Navigate('/daerah')} className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" />Bahasa Daerah<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
        <button onClick={() => Navigate('/ppkn')}   className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" />PPKN<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
        <button onClick={() => Navigate('/sebud')}  className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" />Seni Budaya<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
        <button onClick={() => Navigate('/mobile')} className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" />Pemrograman Mobile<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
        <button onClick={() => Navigate('/php')}    className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" />PHP<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
        <button onClick={() => Navigate('/java')}   className="bg-[#66738F] hover:bg-[#9599B2] text-white border border-white hover:border-green-500 font-bold py-4 px-10 rounded w-full  text-left h-24 text-xl"><img src={Gambar} alt="icon" className="inline-block h-8 w-8 mr-1" />JAVA<div className="text-xs pl-9 text-white font-mono">6 Tugas</div></button>
      </div>
    </div>
      
      </>
    )

}

export default Content;