import Navbar from "../components/Navbar";
import male from "../images/male.png";
import Name from "../components/nav/Name";
  
const profile = () => {
  return (
    <div>
      <Navbar />
      <Name/>
      <div className="ml-40">
        <div className=" ml-28 mt-16 p-7" style={{ backgroundColor: "#3C4462", borderRadius: "5px", border: "3px white solid ", width: "900px", height: "450px" }}>
          <img className="ml-16" src={male} style={{ borderRadius: "300px", width: "200px" }} />
          <div className="ml-5 p-3 text-stone-50" style={{ backgroundColor: "#1E1E1E", width: "300px", marginTop: "70px", borderRadius: "5px", border: "3px white solid" }}>
            <p>
              Nama : <span>Rangga Alif </span>
            </p>
            <p>
              Umur : <span>17 Tahun </span>
            </p>
            <p>
              Kelas : <span>XI RPL3 </span>
            </p>
          </div>
          <div className="w-96 p-6 text-stone-50 " style={{ backgroundColor: "#1E1E1E", marginLeft: "400px", marginTop: "-360px", borderRadius: "7px", display: "block" ,height:"350px" }}>
            <form>
              <span>Name:</span>
              <input type="text" className="bg-white mb-4 w-80 " />
              <span>Password:</span>
              <input type="password" className="bg-white mb-4 w-80" />
              <span>Email:</span>
              <input type="email" className="bg-white mb-4 w-80" />
              <span>NoHp:</span>
              <input type="number" className="bg-white w-80" />
          <button className="w-20 mt-5 h-8 btn-outline text-cyan-50  " style={{ backgroundColor: "#255ECE", borderRadius: "5px", marginLeft: "240px" }}>
            Edit
          </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
