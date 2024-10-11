import ContactMe from "./layout/Contactme"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Home from "./page/Home"
import Mentors from "./page/Mentor"

import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/mentorlar" element={<Mentors/>}/>
    </Routes>
    <ContactMe/>
    <Footer/>
    </>
  )
}

export default App
