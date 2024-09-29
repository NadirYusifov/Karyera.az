import SupportImg from '/public/Support.svg'

function Support() {
  return (
    <>
    <div className="support-section mt-[130px]">
    <div className="container">
     <div className='support-section-wrapper'>
              <div className='support-section-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center items-center'>
                <div className='support-content-text font-jakarta'>
                  <h1 className="text-[70px] tracking-thight leading-[77px] font-bold lg:text-[80px]">24/7 Tələbə dəstəyi</h1>
                  <p className="py-6 text-[20px] font-normal -tracking-tight text-left leading-8 mt-5 mb-7">
                  Lorem ipsum dolor sit amet consectetur. Sit est lacus blandit elementum amet elit. Varius faucibus sit donec molestie. Vulputate sodales diam et ut erat tempor. Tempor condimentum sodales morbi nunc.
                  </p>
                  <div className='btn-wrapper flex'>
                    <button className="btn place-content-center rounded-lg px-10 py-4 mr-10 hover:bg-blue-500 text-white bg-blue-8 leading-5 font-dmsans">Get Started</button>
                  </div>
                </div>
                <div className='support-content-img'>
                  <img
                    
                    alt="heroimg"
                    src={SupportImg}
                    className="rounded-lg max-sm:hidden max-md:hidden" />
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Support