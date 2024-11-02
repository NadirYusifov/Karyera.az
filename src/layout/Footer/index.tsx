import { IoCall, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-very-dark-blue text-light-grayish-blue tracking-wide">
        <div className="container">
          <div className="space-y-8 py-6 sm:px-6 lg:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="footer-caption">
                <div className="text-white [text-shadow:_0_4px_4px_rgba(0,0,0,0.25)] font-semibold text-[36px] leading-[45.36px]">
                  <Link to='/'>
                    <h3>Karyera Z</h3>
                  </Link>
                </div>
                {/* <p className="mt-4 text-[16px] font-jakarta font-light">
                  Bəlkə gələcəyə bizimlə <span className="font-bold">Başlayasan?</span>
                </p> */}
              </div>

              <div className="footer-about text-white font-jakarta my-8 lg:my-3">
                {/* <h3 className="font-semibold pb-5 text-[20px] leading-[20.2px]">Haqqımızda</h3> */}
                <ul className="w-max text-[18px] lg:flex flex-row justify-center items-center font-medium lg:space-x-8">
                  <Link to='/haqqımızda'><li>Haqqımızda</li></Link>
                  <Link to='/karyera'><li>Karyera testi</li></Link>
                  <Link to='/ixtisaslar'><li>İxtisaslar</li></Link>
                  <Link to='/mentorlar'><li>Mentorlar</li></Link>
                </ul>
              </div>

              <div className="footer-contact text-white font-jakarta leading-[20.2px] lg:ml-40">
                <h3 className=" font-semibold pb-3 text-[16px]">Əlaqə</h3>
                <ul className=" space-y-2 font-semibold">
                  <li><a className="inline-flex items-center gap-1 text-[16px]" href="tel:+994501234555"><IoCall className="text-[24px]" />+994 50 123 45 55</a></li>
                  <li><a className="inline-flex items-center gap-1 text-[16px]" href="mailto:karyeraZ@gmail.com"><IoMail className="text-[24px]" />karyeraZ@gmail.com</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-social flex justify-center">
                  <ul className="mt-2 flex gap-14">
                    <li>
                      <a
                        href="https://www.youtube.com/"
                        className="text-dark-charcoal transition hover:opacity-75"
                      >
                        <span className="sr-only">Youtube</span>
                        <svg className="size-[40px]" fill="currentColor" aria-hidden="true" viewBox="0 0 48 48">
                          <path d="M 23.857422 8.5 C 17.504717 8.5 11.602344 8.9526234 8.234375 9.65625 A 1.50015 1.50015 0 0 0 8.2128906 9.6621094 C 5.6754768 10.230693 3.2861897 12.048234 2.7832031 14.894531 A 1.50015 1.50015 0 0 0 2.78125 14.90625 C 2.394836 17.200265 2 20.190694 2 24.5 C 2 28.801151 2.3961903 31.712324 2.8847656 34.126953 C 3.4000756 36.889296 5.7342165 38.761817 8.3105469 39.337891 A 1.50015 1.50015 0 0 0 8.3476562 39.347656 C 11.86271 40.040284 17.598467 40.5 23.951172 40.5 C 30.303877 40.5 36.042686 40.04028 39.558594 39.347656 A 1.50015 1.50015 0 0 0 39.595703 39.337891 C 42.133117 38.769306 44.522404 36.951766 45.025391 34.105469 A 1.50015 1.50015 0 0 0 45.029297 34.083984 C 45.409789 31.743169 45.902812 28.755621 46 24.439453 A 1.50015 1.50015 0 0 0 46 24.40625 C 46 20.087697 45.50571 17.078675 45.023438 14.695312 C 44.512192 11.927074 42.175378 10.049478 39.595703 9.4726562 A 1.50015 1.50015 0 0 0 39.476562 9.4511719 C 36.0464 8.9689502 30.211115 8.5 23.857422 8.5 z M 20.15625 17.001953 C 20.526656 16.994297 20.909531 17.081906 21.269531 17.285156 L 29.873047 22.146484 C 31.324047 22.966484 31.324047 25.035469 29.873047 25.855469 L 21.269531 30.716797 C 19.830531 31.528797 18.037109 30.500328 18.037109 28.861328 L 18.037109 19.138672 C 18.037109 17.909422 19.045031 17.024922 20.15625 17.001953 z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-dark-charcoal transition hover:opacity-75"
                      >
                        <span className="sr-only">Instagram</span>
                        <svg className="size-[40px]" fill="currentColor" viewBox="0 0 48 48">
                          <path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://x.com/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-dark-charcoal transition hover:opacity-75"
                      >
                        <span className="sr-only">TwitterX</span>
                        <svg className="size-[40px]" fill="currentColor" aria-hidden="true" viewBox="0 0 48 48">
                          <path d="M 12.5 6 C 8.916 6 6 8.916 6 12.5 L 6 35.5 C 6 39.084 8.916 42 12.5 42 L 35.5 42 C 39.084 42 42 39.084 42 35.5 L 42 12.5 C 42 8.916 39.084 6 35.5 6 L 12.5 6 z M 13.828125 14 L 20.265625 14 L 25.123047 20.943359 L 31.136719 14 L 33.136719 14 L 26.025391 22.234375 L 34.257812 34 L 27.820312 34 L 22.470703 26.351562 L 15.865234 34 L 13.822266 34 L 21.564453 25.056641 L 13.828125 14 z M 16.935547 15.695312 L 28.587891 32.304688 L 31.150391 32.304688 L 19.498047 15.695312 L 16.935547 15.695312 z" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.facebook.com/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-dark-charcoal transition hover:opacity-75"
                      >
                        <span className="sr-only">Facebook</span>
                        <svg className="size-[40px]" fill="currentColor" viewBox="0 0 48 48">
                          <path d="M42,11.5v25c0,3.03-2.47,5.5-5.5,5.5H31V28h3.62c0.51,0,0.94-0.38,1-0.88l0.37-3c0.04-0.28-0.05-0.57-0.24-0.78 C35.56,23.12,35.29,23,35,23h-4v-3.5c0-1.1,0.9-2,2-2h2c0.55,0,1-0.45,1-1v-3.38c0-0.51-0.4-0.94-0.91-0.99 C35.03,12.12,33.62,12,31.83,12c-4.4,0-6.83,2.62-6.83,7.37V23h-4c-0.55,0-1,0.45-1,1v3c0,0.55,0.45,1,1,1h4v14H11.5 C8.47,42,6,39.53,6,36.5v-25C6,8.47,8.47,6,11.5,6h25C39.53,6,42,8.47,42,11.5z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
            <p className="text-[13px] text-center text-light-grayish-red font-semibold">&copy; 2024. Karyera Z. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer