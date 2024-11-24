import Search from "../../../../src/components/Search"
import HeroImg from "/public/HeroImg.png"
import VectorHeroImg from "/public/Vector.svg"
import ThreeLine from "/public/GroupLine.svg"
// import EllipseYellow from "/public/EllipseYellow.svg"
// import EllipseBlue from "/public/EllipseBlue.svg"
import { Link } from "react-router-dom"

function HeroSection() {
  return (
    <>
      <div className="hero-section mt-10 border-b-[12px] border-dark-cyan font-jakarta">
        <div className="container">
          <Search />
          <div className='hero-section-wrapper'>
            <div className='hero-section-wrapper grid grid-cols-1 space-x-0 lg:space-x-32 xl:grid-cols-2 place-content-center items-center'>
              <div className='hero-content-text font-jakarta mt-20 relative'>
                <h1 className="text-[50px] lg:text-[68px] w-full lg:w-max tracking-thight leading-[60px] font-semibold">Xəyalındakı <span className="text-dark-cyan relative">
                  <img className="absolute top-0 right-0 left-0 -translate-y-8 translate-x-1/4 lg:-translate-y-6 lg:translate-x-2/3" src={ThreeLine} />
                  peşəni
                </span> tap!</h1>
                <p className="py-0 md:py-6 text-[24px] text-very-dark-grayish-red font-medium -tracking-tight text-left leading-10 mt-5 mb-7">
                  Karyera testi ilə bu günün tələb olunan ixtisaslarını kəşf edin, güclü tərəflərinizi üzə çıxarın və iş dünyasında öz yerinizi tapın.
                </p>
                <div className='btn-wrapper relative'>
                  <Link className="relative" to='/karyera'>
                    <button className="relative btn text-[20px] lg:text-[25px] rounded-xl px-10 py-4 mr-10 mb-8 hover:bg-cyan-900 text-white bg-dark-cyan leading-[35px]">Testə keçid edin</button>
                  </Link>
                </div>
              <div className="hero-vector hidden xl:block absolute bottom-10 right-0">
                <img alt="herovector" src={VectorHeroImg} />
              </div>
              </div>
              <div className=' hero-content-img m-0 p-0 hidden xl:block'>
                <img
                  alt="heroimg"
                  src={HeroImg}
                  className="z-20" />
                {/* <img
                  alt="heroimg"
                  src={EllipseYellow}
                  className="absolute top-0 left-0 right-0 translate-x-40 -translate-y-28" />
                <img
                  alt="heroimg"
                  src={EllipseBlue}
                  className="absolute top-0 right-0 left-0 -translate-x-20 translate-y-80" /> */}
              </div>
                  {/* <p>{JSON.stringify(import.meta.env)}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection