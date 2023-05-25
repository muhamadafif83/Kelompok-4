import Nav from "../components/Navbar";
import Navi from "../components/nav/Name";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
// import male from "../images/male.png";

const Materi = () => {
  return (
    <div>
      <Nav />
      <Navi />
      <div className="ml-96 grid gap-x-0 gap-y-2 grid-cols-2">
    <div className="card w-96 bg-base-100 shadow-xl mt-10 ">
    <div className="card-body">
      <div className="grid grid-cols-2">
    <FontAwesomeIcon icon={faClipboardList} size="5x"/>
    <div>
    <h2 className="card-title">Bahasa Indonesia</h2>
    <p>6 Materi</p>
    </div>
    </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl ml-26 mt-10">
        <div className="card-body">
        <div className="grid grid-cols-2">
    <FontAwesomeIcon icon={faClipboardList} size="5x"/>
    <div>
    <h2 className="card-title">Bahasa Inggris</h2>
    <p>6 Materi</p>
    </div>
    </div>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <div className="card-body">
        <div className="grid grid-cols-2">
    <FontAwesomeIcon icon={faClipboardList} size="5x"/>
    <div>
    <h2 className="card-title">Pemrograman Mobile</h2>
    <p>6 Materi</p>
    </div>
    </div>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
    <div className="card w-96 bg-base-100 shadow-xl ml-26 mt-5">
        <div className="card-body">
        <div className="grid grid-cols-2">
    <FontAwesomeIcon icon={faClipboardList} size="5x"/>
    <div>
    <h2 className="card-title">PPKN</h2>
    <p>6 Materi</p>
    </div>
    </div>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div> 
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
        <div className="card-body">
        <div className="grid grid-cols-2">
    <FontAwesomeIcon icon={faClipboardList} size="5x"/>
    <div>
    <h2 className="card-title">Matematika</h2>
    <p>6 Materi</p>
    </div>
    </div>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div> 
    <div className="card w-96 bg-base-100 shadow-xl ml-26 mt-5">
        <div className="card-body">
        <div className="grid grid-cols-2">
    <FontAwesomeIcon icon={faClipboardList} size="5x"/>
    <div>
    <h2 className="card-title">PPL</h2>
    <p>6 Materi</p>
    </div>
    </div>
        <div className="card-actions justify-end">
        </div>
    </div>
    </div>
</div>
    </div>
  );
};

export default Materi;
