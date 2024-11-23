import { useEffect, useState } from "react"
import LoadingSpinner from "./components/Loading/LoadingStartPage"
import Footer from "./layout/Footer"
// import ContactMe from "./layout/Contactme"
import Header from "./layout/Header"
import Home from "./page/Home"
import Mentor from "./page/Mentor"
import { Route, Routes } from "react-router-dom"
// import Login from "./page/Login"
import Career from "./page/Career"
import About from "./page/About"
// import SignUp from "./page/SignUp"
import ScrollTopPage from "./lib/scrolltopage/ScrollTopPage"
import QualificationsPage from "./page/Qualifications"
// import axios from "axios"
import MentorDetail from "./page/Mentor/MentorDetail"
import QualificationsDetail from "./page/Qualifications/QualficicationsDetail"
import NotFound from "./page/NotFound"

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
  //   axios.post("http://46.101.123.210/api/chatgpt/ask")
  //     .then(res => {
  //       // Yanıtı konsola yazdırma
  //       console.log(res.data); // 'data' axios ile dönen yanıtın ana içeriğidir.
  //     })
  //     .catch(err => {
  //       // Hata yönetimi
  //       console.error("Hata oluştu:", err);
  //     });
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
            {/* <Route path="/giriş" element={<Login />} /> */}
            {/* <Route path="/qeydiyyat" element={<SignUp />} /> */}
            <Route path="/karyera" element={<Career />} />
            <Route path="/mentorlar" element={<Mentor />} />
            <Route path="/mentor/:id" element={<MentorDetail />} />
            <Route path="/ixtisaslar" element={<QualificationsPage />} />
            <Route path="/ixtisas/:id" element={<QualificationsDetail />} />
            <Route path="/haqqımızda" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          {/* <ContactMe /> */}
          <Footer />
          {/* {!isLoginPageShow && !isCareerPageShow && <ContactMe />}
          {!isLoginPageShow && !isCareerPageShow && <Footer />} */}
        </>
      }
    </>
  )
}

export default App
