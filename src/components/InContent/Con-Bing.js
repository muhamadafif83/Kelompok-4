import { useNavigate } from "react-router-dom"

const Bingg = () => {
    const But = useNavigate()

    return(
      <>
    <div className="h-screen w-5/6 flex flex-col justify-center items-start bg-[#0F2443]">
      <h1 className="text-2xl text-white font-bold absolute top-0 left-0 ml-72 mt-8">Luthfi Halimawan</h1>
      <h5 className="text-lg font-small text-white absolute top-1 left-3 ml-72 mt-16">Aktif </h5> 
      <hr className="border-blue-700  absolute top-2  ml-1 mt-24" style={{ width: "79%", color: "#66738F", backgroundColor: "#66738F", height: 1, border: "none" }} />
      <div className="grid grid-cols-3 md:grid-cols-2 gap-4 "  >
        <button onClick={() => But('#/')} className="bg-[#66738F] hover:bg-[#9599B2] text-white font-bold border border-white hover:border-green-500 py-6 px-60 pl-14 rounded w-full  text-start h-24 text-xl"><span className="hover:text-green-400">Tugas 1</span><div className="text-xs  text-white hover:text-red-500 font-mono">Batas Pengumoulan: 10/02/1999 23:59:59</div></button>
        <button onClick={() => But('#/')} className="bg-[#66738F] hover:bg-[#9599B2] text-white font-bold border border-white hover:border-green-500 py-4 px-60 pl-14 rounded w-full  text-start h-24 text-xl"><span className="hover:text-green-400">Tugas 2</span><div className="text-xs  text-white hover:text-red-500 font-mono">Batas Pengumoulan: 10/02/1999 23:59:59</div></button>
        <button onClick={() => But('#/')} className="bg-[#66738F] hover:bg-[#9599B2] text-white font-bold border border-white hover:border-green-500 py-4 px-60 pl-14 rounded w-full  text-start h-24 text-xl"><span className="hover:text-green-400">Tugas 3</span><div className="text-xs  text-white hover:text-red-500 font-mono">Batas Pengumoulan: 10/02/1999 23:59:59</div></button>
        <button onClick={() => But('#/')} className="bg-[#66738F] hover:bg-[#9599B2] text-white font-bold border border-white hover:border-green-500 py-4 px-60 pl-14 rounded w-full  text-start h-24 text-xl"><span className="hover:text-green-400">Tugas 4</span><div className="text-xs  text-white hover:text-red-500 font-mono">Batas Pengumoulan: 10/02/1999 23:59:59</div></button>
      </div>
      <br/>
      <button onClick={() => But('/tugas')} className="bg-red-700 hover:bg-green-500 text-white hover:text-black rounded px-3">Back</button>
    </div>
      
      </>
    )
}

export default Bingg