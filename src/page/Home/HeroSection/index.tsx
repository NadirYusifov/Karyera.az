import HeroImg from "/public/HeroImg.png"
// import Frame3 from "/public/Frame 3.svg"
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Home() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,

  // }
  return (
    <>
      <div className="hero-section mt-10">
        <div className="container">
          
            <div className='hero-section-wrapper'>
              <div className='hero-section-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center items-center'>
                <div className='hero-content-text font-jakarta'>
                  <h1 className="text-[70px] tracking-thight leading-[77px] font-bold lg:text-[80px]">İxtisasları bizimlə axtar!</h1>
                  <p className="py-6 text-[20px] font-normal -tracking-tight text-left leading-8 mt-5 mb-7">
                    Gələcəyin müasir ixtisasları və təcrübəli mentorlar burada!
                  </p>
                  <div className='btn-wrapper flex'>
                    <button className="btn place-content-center rounded-lg px-10 py-4 mr-10 hover:bg-blue-500 text-white bg-blue-8 leading-5 font-dmsans">Get Started</button>
                  </div>
                </div>
                <div className='hero-content-img'>
                  <img
                    alt="heroimg"
                    src={HeroImg}
                    className="rounded-lg max-sm:hidden max-md:hidden w-full" />
                </div>
              </div>
            </div>
        </div>
      </div>


    </>
  )
}

export default Home