import ContactImg from '/public/Contact.svg'

function Support() {
  return (
    <>
    <div className="support-section mt-[130px] mb-[110px]">
    <div className="container">
     <div className='support-section-wrapper relative'>
                <div className='support-content-img relative'>
                  <img
                    alt="heroimg"
                    src={ContactImg}
                    className="rounded-lg" />
                </div>

                <div className='support-header absolute top-0 right-0 left-0 text-center'>
                  <div className='support-text text-white'>
                  <h3>Bizimlə əlaqə yarat!</h3>
                  <p>"Mentor olaraq qeydiyyatdan keçib, biliklərinizi paylaşınb və başqalarının inkişafına dəstək olmaq üçün e-mailinizi qeyd edin!"</p>
                  </div>
                  <form className='support-input relative'>
                    <input className='relative rounded-full pl-5 pr-[105px] py-2 w-3/4 outline-none'/>
                    <button className='bg-blue-8 text-white top-1 right-[60px] px-5 py-1 rounded-full absolute'>Gönder</button>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Support