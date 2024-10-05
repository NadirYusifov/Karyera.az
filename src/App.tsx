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
    <Mentors/>
    {/* <Support/> */}
    <Footer/>
    </>
  )
}

export default App
