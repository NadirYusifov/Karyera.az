import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Home from "./page/Home/HeroSection"
import Mentors from "./page/Home/Mentors"
import Qualficitaions from "./page/Home/Qualifications"
// import Support from "./page/Home/Support"

function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Qualficitaions/>
    {/* <Support/> */}
    <Mentors/>
    <Footer/>
    </>
  )
}

export default App
