import EllipseYellow from "/public/EllipseYellow.svg"
import EllipseBlue from "/public/EllipseBlue.svg"
import EmailSend from "/public/EmailSend.svg"

function ContactMe() {
  return (
    <>
      <div className="support-section mt-[130px] mb-[110px] font-jakarta">
        <div className="container lg:px-[110px]">
          <div className='support-section-wrapper relative 2xl:mx-[232px]'>
            <div className='support-ellipse-yellow absolute top-0 right-0 left-0 -translate-y-32 translate-x-20 lg:-translate-y-14 lg:translate-x-80 flex flex-col justify-center items-center w-full h-full -z-40'>
              <img src={EllipseYellow}/>
            </div>
            <div className='support-ellipse-blue absolute top-0 right-0 left-0 translate-y-40 -translate-x-20 lg:translate-y-28 lg:-translate-x-80 flex flex-col justify-center items-center w-full h-full rounded-2xl py-10 bg-transparent px-8 -z-40'>
              <img src={EllipseBlue}/>
            </div>
              <div className='support-header backdrop-blur-lg border border-[#E1DFDF] rounded-2xl px-3 lg:px-[83px] py-[27px] z-20'>
              <div className="support-content-header text-[24px] text-center text-very-dark-blue font-normal leading-[30.24px] pb-6">
                <h3>Bəlkə gələcəyə bizimlə başlayasan?</h3>
                </div> 
                <div className='support-content-text text-[20px] text-center leading-[25.2px] text-dark-grayish-red pb-6 font-semibold'>
                  <p>Bizimlə əlaqə yarat!</p>
                  <p>"Mentor olaraq qeydiyyatdan keçib, biliklərinizi paylaşıb və başqalarının inkişafına dəstək olmaq üçün e-mailinizi qeyd edin!"</p>
                </div>
                <div className="support-email relative mt-2">
                  <form className='relative support-input flex justify-center items-center'>
                    <input className='bg-very-dark-desaturated-cyan text-white w-full relative rounded-full pl-5 pr-[105px] py-2 outline-none caret-white placeholder:text-white' required placeholder="youexample@gmail.com" />
                    <button type="submit" className='bg-transparent inline-flex items-center top-0 max-sm:right-0 sm:right-0 md:right-0 bottom-0 mx-6 my-1 absolute'><img src={EmailSend}/></button>
                  </form>
                </div>
              </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe