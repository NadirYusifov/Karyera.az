import { LuCalendarDays } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { TfiCup } from "react-icons/tfi";

function Mentors() {
  return (
    <>
    <div className="mentors-card">
        <div className="container">

    <div className="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
      <div className="relative h-40">
        <img className="absolute h-full w-full object-cover" src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"/>
      </div>
      <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"/>
      </div>
      <div className="mt-16">
        <h1 className="text-lg text-center font-semibold">
          Cassie 
        </h1>
        <p className="text-sm text-gray-600 text-center">
          Marketing Strategist
        </p>
        <div className="experience flex justify-between">
            <div className="experince-years flex flex-col justify-center items-center">
                <LuCalendarDays/>
            <p>10+ Years</p>
            <span>Experince</span>
            </div>
            <div className="experince-years flex flex-col justify-center items-center">
            <FiBriefcase />
            <p>Digital Marketing</p>
            <span>Expertise</span>
            </div>
            <div className="experince-years flex flex-col justify-center items-center">
            <TfiCup />
            <p>Award-Winning</p>
            <span>Achievements</span>
            </div>
        </div>
        <div className="mentors-description">
            <div className="mentors-desc-header">
                <span className="bg-slate-600 rounded-md w-[20px]"></span>
            <h3>Acme Inc.</h3>
            <p>Marketing Strategist</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt impedit soluta molestias quae corrupti, magnam deleniti repudiandae, dolor iste ratione debitis! Qui, assumenda maxime? At optio voluptatibus exercitationem incidunt!
            Magni deserunt inventore minus rem alias, fuga cupiditate illum consequuntur. Maiores, recusandae optio minima asperiores id inventore eligendi aspernatur eius minus saepe, alias, ducimus a! Repellat sit blanditiis aspernatur nesciunt.</p>
        </div>

      </div>
      
    </div>
        </div>
    </div>
    </>
  )
}

export default Mentors