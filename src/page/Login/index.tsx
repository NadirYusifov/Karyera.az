function Login() {
  return (
    <>
    <section className="bg-[#143A55] py-44">
      <div className="container">
        <div className="login-wrapper bg-white px-[109px] py-[197px]">
          <div className="login-input">
          <form className="flex flex-col">
            <input className="px-3 py-1 outline-none border rounded-md mb-3" placeholder="Epoçt"/>
            <input className="px-3 py-1 outline-none border rounded-md mt-3" placeholder="Şifrənizi daxil edin"/>
          </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Login