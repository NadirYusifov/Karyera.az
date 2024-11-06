import { Link } from "react-router-dom"

function SignUp() {
  return (
    <>
      <section className="login-section w-full h-full bg-[#143A55] flex items-center font-jakarta">
        <div className="container flex items-center justify-center">
          <div className="login-wrapper w-[824px] h-full bg-white rounded-xl px-4 lg:px-[109px] py-[65px] my-10">
            <div className="login-header text-[48px] text-center font-medium leading-[60.48px] mb-10">
              <h3>Qeydiyyat</h3>
            </div>
            <div className="login-input mb-10">
              <form className="flex flex-col">
                <input className="w-full text-[18px] px-10 py-2 outline-none border rounded-xl mb-4" placeholder="Adınız" required />
                <div className="login-mail flex items-center relative">
                  <input className="w-full text-[18px] px-10 py-2 outline-none border rounded-xl mb-4" placeholder="Epoçt" required />
                  <div className="login-mail-icon absolute top-3 left-0 ml-2">
                    <svg width="25" height="25" viewBox="0 0 32 32">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22966 6.89592C2.66699 8.45725 2.66699 10.9719 2.66699 15.9999C2.66699 21.0279 2.66699 23.5426 4.22966 25.1039C5.79233 26.6653 8.30566 26.6666 13.3337 26.6666H18.667C23.695 26.6666 26.2097 26.6666 27.771 25.1039C29.3323 23.5413 29.3337 21.0279 29.3337 15.9999C29.3337 10.9719 29.3337 8.45725 27.771 6.89592C26.2083 5.33459 23.695 5.33325 18.667 5.33325H13.3337C8.30566 5.33325 5.79099 5.33325 4.22966 6.89592ZM24.7683 10.0266C24.938 10.2303 25.0198 10.4931 24.9958 10.7571C24.9718 11.0211 24.8439 11.2648 24.6403 11.4346L21.7123 13.8746C20.5297 14.8613 19.5723 15.6586 18.7257 16.2026C17.8457 16.7693 16.9883 17.1266 16.0003 17.1266C15.0123 17.1266 14.155 16.7679 13.2737 16.2026C12.4283 15.6586 11.471 14.8599 10.2883 13.8759L7.36033 11.4359C7.15646 11.2662 7.02838 11.0224 7.00425 10.7582C6.98012 10.4941 7.06192 10.2311 7.23166 10.0273C7.4014 9.82339 7.64517 9.6953 7.90934 9.67117C8.17352 9.64704 8.43646 9.72885 8.64033 9.89859L11.5203 12.2973C12.7643 13.3333 13.627 14.0506 14.3577 14.5199C15.063 14.9733 15.5417 15.1266 16.0017 15.1266C16.4617 15.1266 16.9403 14.9746 17.6457 14.5199C18.375 14.0506 19.239 13.3333 20.483 12.2973L23.3617 9.89725C23.5655 9.72774 23.8284 9.64614 24.0924 9.6704C24.3565 9.69465 24.5987 9.82277 24.7683 10.0266Z" fill="#4E4D4D" />
                    </svg>
                    <p className="sr-only">Mail</p>
                  </div>
                </div>
                <div className="login-password flex items-center relative">
                  <input className="w-full text-[18px] px-10 py-2 outline-none border rounded-xl mt-4" placeholder="Şifrənizi daxil edin" required />
                  <div className="login-password-icon absolute bottom-3 left-0 ml-2">
                    <svg width="25" height="25" viewBox="0 0 32 32">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00033 13.4067V10.6667C7.00033 8.2798 7.94854 5.99061 9.63636 4.30279C11.3242 2.61496 13.6134 1.66675 16.0003 1.66675C18.3873 1.66675 20.6765 2.61496 22.3643 4.30279C24.0521 5.99061 25.0003 8.2798 25.0003 10.6667V13.4067C26.487 13.5174 27.4537 13.7974 28.1617 14.5054C29.3337 15.6761 29.3337 17.5627 29.3337 21.3334C29.3337 25.1041 29.3337 26.9907 28.1617 28.1614C26.991 29.3334 25.1043 29.3334 21.3337 29.3334H10.667C6.89633 29.3334 5.00966 29.3334 3.83899 28.1614C2.66699 26.9907 2.66699 25.1041 2.66699 21.3334C2.66699 17.5627 2.66699 15.6761 3.83899 14.5054C4.54566 13.7974 5.51366 13.5174 7.00033 13.4067ZM9.00033 10.6667C9.00033 8.81023 9.73782 7.02975 11.0506 5.717C12.3633 4.40425 14.1438 3.66675 16.0003 3.66675C17.8568 3.66675 19.6373 4.40425 20.9501 5.717C22.2628 7.02975 23.0003 8.81023 23.0003 10.6667V13.3387C22.4901 13.3343 21.9345 13.3325 21.3337 13.3334H10.667C10.0652 13.3325 9.50966 13.3343 9.00033 13.3387V10.6667Z" fill="#4E4D4D" />
                    </svg>
                    <p className="sr-only">Password</p>
                  </div>
                </div>
                <p className="text-right text-[15px] text-very-dark-blue font-medium leading-[15px] pb-10 pt-1">Şifrəni unutmusunuz?</p>
                <button className="bg-very-dark-blue text-white text-[20px] font-semibold leading-[45.36px] rounded-xl" type="submit">Qeydiyyat</button>
              </form>
            </div>
            <hr />
            <div className="login-social-other mt-6">
              <div className="login-social-media-text text-[16px] leading-[16px] font-medium text-center">
                <p>Və ya aşağıdakılar ilə davam et.</p>
              </div>
              <div className="login-social-media-button flex flex-row justify-center items-center gap-6 my-7">
                <button className="border p-3 rounded-xl shadow-lg shadow-sky-300/20">
                  <svg className="size-6" width="48" height="48" viewBox="0 0 48 48">
                    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                </button>
                <button className="border p-3 rounded-xl shadow-lg shadow-sky-300/20">
                  <svg className="size-6" width="48" height="48" viewBox="0 0 48 48">
                    <linearGradient id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1" x1="10.341" x2="40.798" y1="8.312" y2="38.769" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)" d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02" />
                  </svg>
                </button>
                <button className="border p-3 rounded-xl shadow-lg shadow-sky-300/20">
                  <svg className="size-6" width="48" height="48" viewBox="0 0 48 48">
                    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z" /><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z" />
                  </svg>
                </button>
                <button className="border p-3 rounded-xl shadow-lg shadow-sky-300/20">
                  <svg className="size-6" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
                  </svg>
                </button>
              </div>
              <div className="login-register-link text-center">
                <p>Hesabınız var? <Link className="text-very-dark-blue underline" to={"/giriş"}>Giriş</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp