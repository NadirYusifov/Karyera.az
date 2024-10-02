import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import MentorImg from '/public/bck-img.jpg'
// import { FiBriefcase } from "react-icons/fi";
// import { TfiCup } from "react-icons/tfi";

function Mentors() {
  return (
    <>
    <div className="mentors-card bg-blue-8 py-8 my-[110px]">
        <div className="container">

    <div className="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
      <div className="relative h-40">
        <img className="absolute h-full w-full object-cover" src={MentorImg}/>
      </div>
      <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"/>
      </div>
      <div className="mt-16 px-8">
        <h1 className="text-lg text-center font-semibold">
          Cassie 
        </h1>
        <p className="text-sm text-blue-8 text-center">
          Front-End Developer        </p>
        <div className="mentors-description my-3">
            <div className="mentors-desc-header text-gray-700">
            <h3>Acme Inc.</h3>
            <p>Web Developer, Front-End Developer</p>
            <p>Web development enthusiast with 5 years of experience.</p>
            </div>
        </div>
        <div className="social-media flex justify-center items-center mt-8 space-x-4 text-[20px] text-white">
          <a className="bg-blue-8 px-2 py-2 rounded-full" href="https://www.instagram.com/"><FaInstagram /></a>
          <a className="bg-blue-8 px-2 py-2 rounded-full" href="https://www.facebook.com/"><FaFacebook/></a>
          <a className="bg-blue-8 px-2 py-2 rounded-full" href="https://www.linkedin.com/"><FaLinkedin/></a>
        </div>
      </div>
      
    </div>
        </div>
    </div>
    </>
  )
}

export default Mentors