import { useEffect, useState } from "react"
import LoadingSpinner from "./Components/Loading"
import ContactMe from "./layout/Contactme"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Home from "./page/Home"
import Mentors from "./page/Mentor"

import { Route, Routes } from "react-router-dom"
import Login from "./page/Login"

function App() {
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
          
          {/* {location.pathname === 'login' && <Header/>} */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mentorlar" element={<Mentors />} />
          </Routes>
          <ContactMe />
          <Footer />
        </>
      }
    </>
  )
}

export default App
