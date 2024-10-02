import { useState } from "react";
import { IoIosClose, IoIosSearch } from "react-icons/io";

function Header() {

  const [searchbar, setSearchBar] =useState<boolean>(false);
  

  return (
    <>
      <div className="header-section py-4 font-jakarta relative">
        <div className="container">
          <div className="row">
            <div className="flex justify-between flex-wrap">
              <div className="header-logo">
                <h1>Logo</h1>
              </div>
              <nav className="header-nav flex justify-center max-sm:hidden max-md:hidden">
                <a className="px-2">Ana səhifə</a>
                <a className="px-2">Mentorlar</a>
                <a className="px-2">İxtisaslar</a>
                <a className="px-2">Haqqımızda</a>
              </nav>
              <div className="header-right flex items-center gap-3">
                <div className="search-icon text-[20px] relative">
                  <button onClick={() => {setSearchBar(prev => !prev); (searchbar:any) => !searchbar}}><IoIosSearch/>
                  </button>
                </div>
                <div className="header-register">
                  <button className="border border-solid text-black rounded-md mr-3 px-2 py-1">Giriş</button>
                  <button className="bg-blue-8 text-white rounded-md px-2 py-1">Qeydiyyat</button>
                </div>
              </div>
            </div>
          </div>
        </div>
                  {searchbar ? 
                  <div className=" absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-40 h-screen bg-slate-800/50">
                  <div className="absolute top-0 right-0 bottom-0 m-6 text-[30px]">
                  <button className="text-white" onClick={() => {setSearchBar(prev => !prev); (searchbar:any) => !searchbar}}><IoIosClose/>
                  </button>  
                  </div> 
                  <div className="place-content-center relative ">
                    <input className="realtive w-[350px] md:w-[500px]  pr-16 pl-2 py-2 rounded-md outline-none caret-slate-500" placeholder="İxtisaslar, Mentorlar və.s"/> 
                    <button className="absolute top-0 bottom-0 right-0 bg-blue-8 text-white px-2 py-1 rounded-e-md">Axtar</button>
                  </div>
                  </div> : <input className="hidden"/> }
      </div>
    </>
  )
}

export default Header