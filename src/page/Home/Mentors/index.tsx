import { FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import MentorImg from '/public/bck-img.jpg'
// import { FiBriefcase } from "react-icons/fi";
// import { TfiCup } from "react-icons/tfi";

const mentors = [
  {
    ad: "Ali Veli",
    alan: "Frontend Developer",
    deneyim: "10 ildən artıq frontend inkişaf təcrübəsinə malikdir.",
    email: "ali.veli@example.com",
    image: "https://example.com/ali-veli.jpg",
  },
  {
    ad: "Ayşe Yılmaz",
    alan: "Backend Developer",
    deneyim: "8 il backend proqramlaşdırma sahəsində təcrübəsi vardır.",
    email: "ayse.yilmaz@example.com",
    image: "https://example.com/ayse-yilmaz.jpg",
  },
  {
    ad: "Mehmet Demir",
    alan: "Full Stack Developer",
    deneyim: "5 il boyunca həm frontend, həm də backend inkişafında təcrübə qazanmışdır.",
    email: "mehmet.demir@example.com",
    image: "https://example.com/mehmet-demir.jpg",
  },
  {
    ad: "Fatma Korkmaz",
    alan: "Mobile Developer",
    deneyim: "Mobil tətbiq inkişafında 7 il təcrübəyə malikdir.",
    email: "fatma.korkmaz@example.com",
    image: "https://example.com/fatma-korkmaz.jpg",
  },
  {
    ad: "Emre Can",
    alan: "DevOps Engineer",
    deneyim: "6 il ərzində DevOps mühitində iş təcrübəsi var.",
    email: "emre.can@example.com",
    image: "https://example.com/emre-can.jpg",
  },
  {
    ad: "Zeynep Arslan",
    alan: "Data Scientist",
    deneyim: "12 ildən çox məlumat analizi və modeləşdirmə sahəsində təcrübəsi vardır.",
    email: "zeynep.arslan@example.com",
    image: "https://example.com/zeynep-arslan.jpg",
  },
  {
    ad: "Ahmet Koç",
    alan: "Game Developer",
    deneyim: "9 il oyun inkişafı sahəsində geniş təcrübəyə malikdir.",
    email: "ahmet.koc@example.com",
    image: "https://example.com/ahmet-koc.jpg",
  },
  {
    ad: "Elif Çelik",
    alan: "QA Engineer",
    deneyim: "4 ildən artıq proqram təminatının test edilməsində təcrübəsi var.",
    email: "elif.celik@example.com",
    image: "https://example.com/elif-celik.jpg",
  },
  {
    ad: "Burak Yıldız",
    alan: "UI/UX Designer",
    deneyim: "3 il ərzində istifadəçi interfeysi və təcrübəsi dizaynında iş təcrübəsi vardır.",
    email: "burak.yildiz@example.com",
    image: "https://example.com/burak-yildiz.jpg",
  },
  {
    ad: "Seda Aydın",
    alan: "Security Engineer",
    deneyim: "11 il ərzində proqram təhlükəsizliyi sahəsində təcrübəyə malikdir.",
    email: "seda.aydin@example.com",
    image: "https://example.com/seda-aydin.jpg",
  },
];

console.log(mentors);


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