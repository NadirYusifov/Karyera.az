import { useEffect, useState } from "react"
import LoadingSpinner from "./Components/Loading"
// import ContactMe from "./layout/Contactme"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Home from "./page/Home"
import Mentors from "./page/Mentor"

import { Route, Routes } from "react-router-dom"
import Login from "./page/Login"
import Career from "./page/Career"
import About from "./page/About"
import SignUp from "./page/SignUp"
import ScrollTopPage from "./lib/scrolltopage/ScrollTopPage"
// import axios from "axios"

function App() {
  // const location = useLocation()
  // const isLoginPageShow = location.pathname === "/login"
  // const isCareerPageShow = location.pathname === "/career"
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  // useEffect(() => {
  //   axios.post('http://46.101.123.210:8585/api/chatgpt/ask', {"question" : "salam"})
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .catch(error => {
  //     console.error('Axios error:', error);
  //   });
  // }, []);
  

  return (
    <>
      {loading ?
        <LoadingSpinner />
        :
        <>
          {/* <Routes>
            <Route path="/login" element={<Login />} />
          </Routes> */}

          <Header />
          {/* {!isLoginPageShow && !isCareerPageShow && <Header />} */}
          <ScrollTopPage />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/career" element={<Career />} />
            <Route path="/mentorlar" element={<Mentors />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
          {/* {!isLoginPageShow && !isCareerPageShow && <ContactMe />}
          {!isLoginPageShow && !isCareerPageShow && <Footer />} */}
        </>
      }
    </>
  )
}

export default App
