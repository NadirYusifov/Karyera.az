function ContactMe() {
  return (
    <>
      <div className="support-section mt-[130px] mb-[110px]">
        <div className="container">
          <div className='support-section-wrapper 2xl:mx-[232px]'>
            <div className='support-content-img flex flex-col justify-center items-center w-full h-full rounded-2xl py-10 bg-no-repeat bg-contact-image px-8'>
              <div className='support-header '>
                <div className='support-text text-white pb-6 text-center'>
                  <h3 className="text-[40px] leading-[57.8px] font-semibold tracking-wide">Bizimlə əlaqə yarat!</h3>
                  <p className="md:w-[672px] max-sm:text-[18px] lg:text-[20px] leading-[30px]">"Mentor olaraq qeydiyyatdan keçib, biliklərinizi paylaşınb və başqalarının inkişafına dəstək olmaq üçün e-mailinizi qeyd edin!"</p>
                </div>
                <div className="support-email relative mt-2">
                  <form className='relative support-input flex justify-center items-center'>
                    <input className='w-full relative rounded-full pl-5 pr-[105px] py-2 outline-none caret-blue-8' required placeholder="youexample@gmail.com" />
                    <button type="submit" className='bg-blue-8 text-white top-0 max-sm:right-0 sm:right-0 md:right-0 bottom-0 px-5 py-1 rounded-full absolute my-0.5 mr-0.5'>Gönder</button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe