import { useState } from "react";
// import { IoIosClose, IoIosSearch } from "react-icons/io";
// import { FiPhoneCall, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
// import BashlaAzImg from "../../../public/Preview.png"

function Header() {

  const [Menu, setMenu] = useState<boolean>(false);


  return (
    <>
      <div className="header-section text-white font-jakarta sticky top-0 z-[99999] bg-very-dark-blue shadow-xl">
        <div className="container">
          <div className="row">
            <div className="flex justify-between items-center flex-wrap py-4">
              <div className="header-logo flex items-center text-[20px] font-bold z-[99999]">
                {/* <img className="bg-transparent" src={BashlaAzImg}/> */}
                <Link to='/'>
                  <h3>Karyera Z</h3>
                </Link>
              </div>
              <nav className="header-nav duration-500 hidden lg:flex justify-center items-center">
                <Link to='/' className="px-2">Əsas səhifə</Link>
                <Link to='/karyera' className="px-2">Karyera testi</Link>
                <Link to='/ixtisaslar' className="px-2">İxtisaslar</Link>
                {/* <Link to='/mentorlar' className="px-2">Mentorlar</Link> */}
                <Link to='/haqqımızda' className="px-2">Haqqımızda</Link>
              </nav>
              <div className="header-right flex items-center gap-3">
                <div className="header-register hidden lg:flex">
                  {/* <Link to={"/giriş"}>
                    <button className="border border-solid text-white text-[16px] font-semibold leading-[20.16px] rounded-full mr-3 px-5 py-[10px]">Giriş</button>
                  </Link>
                  <Link to={"/qeydiyyat"}>
                    <button className="bg-white text-very-dark-blue text-[16px] font-semibold leading-[20.16px] rounded-full px-5 py-[10px]">Qeydiyyat</button>
                  </Link> */}
                </div>
                <div className="menu-icon text-[20px] block lg:hidden">
                  <button onClick={() => setMenu(!Menu)}>{Menu ?
                      <div className="absolute top-0 right-0 left-0 bg-black bg-opacity-50 h-screen">
                    <div className="absoluteb left-0 right-0 top-0 py-5 bg-very-dark-blue shadow-xl w-full">
                      <div className="container">
                      <div className="flex justify-end">
                        <AiOutlineClose />
                      </div>
                      <nav className="header-nav flex flex-col justify-center items-center gap-y-2 my-5">
                        <Link to='/' className="px-2">Əsas səhifə</Link>
                        <Link to='/karyera' className="px-2">Karyera testi</Link>
                        <Link to='/ixtisaslar' className="px-2">İxtisaslar</Link>
                        <Link to='/mentorlar' className="px-2">Mentorlar</Link>
                        <Link to='/haqqımızda' className="px-2">Haqqımızda</Link>
                      </nav>
                      <div className="header-register flex items-center justify-center">
                        {/* <Link to={"/giriş"}>
                          <button className="border border-solid text-white text-[16px] font-semibold leading-[20.16px] rounded-full mr-3 px-5 py-[10px]">Giriş</button>
                        </Link>
                        <Link to={"/qeydiyyat"}>
                          <button className="bg-white text-very-dark-blue text-[16px] font-semibold leading-[20.16px] rounded-full px-5 py-[10px]">Qeydiyyat</button>
                        </Link> */}
                      </div>
                      </div>
                      </div>
                    </div>
                    : <HiOutlineMenuAlt2 />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-40 h-screen bg-slate-800/50">
            <div className="absolute top-12 right-6 bottom-0 text-[40px]">
              <button className="text-white"><IoIosClose />
              </button>
            </div>
            <div className="place-content-center relative ">
              <input className="realtive w-[350px] md:w-[500px]  pr-16 pl-2 py-2 rounded-md outline-none caret-slate-200" placeholder="İxtisaslar, Mentorlar və.s" />
              <button className="absolute top-0 bottom-0 right-0 bg-blue-8 text-white px-2 py-1 rounded-e-md">Axtar</button>
            </div>
          </div> : <input className="hidden" /> */}
      </div>
    </>
  )
}

export default Header