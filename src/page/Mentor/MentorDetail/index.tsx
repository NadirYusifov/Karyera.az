// import { useParams } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import MentorHeroImg from "../../../../public/MentorDetail.png"
import MentorUserProfileImg from "../../../../public/image.png"

function MentorDetail() {
  // const {...sosyalMedya} = useParams()

  return (
    <>
      <section className="mentor-detail-section">
        <div className="w-full">
          <div className="relative h-40 lg:h-80">
            <img className="absolute h-full w-full object-cover" src={MentorHeroImg} />
          </div>
          <div className="bg-white pb-5">
            <div className="container">
              <div className="flex flex-row justify-between pt-4">
                <div className="relative w-36 -my-12 rounded-full overflow-hidden">
                  <img className="object-cover w-full h-full" src={MentorUserProfileImg} />
                </div>
                <div className="">
                  <ul className="flex items-center gap-3 text-[18px] lg:text-[23px]">
                    <li className="bg-very-dark-blue text-white rounded-full p-2 lg:p-3">
                      <p className="sr-only">Facebook</p>
                      <a href="https://facebook.com/">
                        <span><FaFacebook /></span>
                      </a>
                    </li>

                    <li className="bg-very-dark-blue text-white rounded-full p-2 lg:p-3">
                      <p className="sr-only">Linkedin</p>
                      <a href="https://www.linkedin.com/feed/">
                        <span><FaLinkedin /></span>
                      </a>
                    </li>

                    <li className="bg-very-dark-blue text-white rounded-full p-2 lg:p-3">
                      <p className="sr-only">Instagram</p>
                      <a href="https://www.instagram.com/">
                        <span><FaInstagram /></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-16">
                <h2 className="text-[25px] font-medium text-black">John Doe <span className="text-dark-silver text-[18px]">• <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a></span></h2>
                <p className="text-very-dark-blue font-medium text-[18px]">UI/UX dizayner</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default MentorDetail