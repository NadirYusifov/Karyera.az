import { useState } from "react";
import { IoIosClose, IoIosSearch } from "react-icons/io";
// import { FiPhoneCall, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
// import BashlaAzImg from "../../../public/Preview.png"

function Header() {

  const [searchbar, setSearchBar] = useState<boolean>(false);


  return (
    <>
      <div className="header-section text-white font-jakarta sticky top-0 z-10 bg-very-dark-blue">
        <div className="container">
          <div className="row">
            <div className="flex justify-between flex-wrap py-4">
              <div className="header-logo flex items-center text-[20px] font-bold ">
                {/* <img className="bg-transparent" src={BashlaAzImg}/> */}
                <Link to='/'>
                  <h3>Bashla.az</h3>
                </Link>
              </div>
              <nav className="header-nav flex justify-center max-sm:hidden max-md:hidden">
                <Link to='/' className="px-2">Əsas səhifə</Link>
                <a className="px-2">Karyera testi</a>
                <a className="px-2">İxtisaslar</a>
                <Link to='/mentorlar' className="px-2">Mentorlar</Link>
                <a className="px-2">Blog</a>
                <a className="px-2">Haqqımızda</a>
              </nav>
              <div className="header-right flex items-center gap-3">
                <div className="search-icon text-[20px] relative">
                  <button onClick={() => { setSearchBar(prev => !prev); (searchbar: any) => !searchbar }}><IoIosSearch />
                  </button>
                </div>
                <div className="header-register">
                  <button className="border border-solid text-white rounded-full mr-3 px-2 py-1">Giriş</button>
                  <button className="bg-white text-very-dark-blue rounded-full px-2 py-1">Qeydiyyat</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {searchbar ?
          <div className=" absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-40 h-screen bg-slate-800/50">
            <div className="absolute top-12 right-6 bottom-0 text-[40px]">
              <button className="text-white" onClick={() => { setSearchBar(prev => !prev); (searchbar: any) => !searchbar }}><IoIosClose />
              </button>
            </div>
            <div className="place-content-center relative ">
              <input className="realtive w-[350px] md:w-[500px]  pr-16 pl-2 py-2 rounded-md outline-none caret-slate-200" placeholder="İxtisaslar, Mentorlar və.s" />
              <button className="absolute top-0 bottom-0 right-0 bg-blue-8 text-white px-2 py-1 rounded-e-md">Axtar</button>
            </div>
          </div> : <input className="hidden" />}
      </div>
    </>
  )
}

export default Header