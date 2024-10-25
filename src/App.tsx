import { useEffect, useState } from "react"
import LoadingSpinner from "./Components/Loading"
import ContactMe from "./layout/Contactme"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Home from "./page/Home"
import Mentors from "./page/Mentor"

import { Route, Routes, useLocation } from "react-router-dom"
import Login from "./page/Login"
import Career from "./page/Career"

function App() {
  const location = useLocation()
  const isLoginPageShow = location.pathname === "/login"
  const isCareerPageShow = location.pathname === "/career"
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, )
  }, [])

  return (
    <>
      {loading ?
        <LoadingSpinner />
        :
        <>
          {/* <Routes>
            <Route path="/login" element={<Login />} />
          </Routes> */}
          
          {/* <Header /> */}
          {!isLoginPageShow && !isCareerPageShow && <Header/>}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/career" element={<Career />} />
            <Route path="/mentorlar" element={<Mentors />} />
          </Routes>
          {!isLoginPageShow && !isCareerPageShow && <ContactMe/>}
          {!isLoginPageShow && !isCareerPageShow && <Footer />}
        </>
      }
    </>
  )
}

export default App
