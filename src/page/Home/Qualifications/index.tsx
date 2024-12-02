import des2 from "/public/des2.jpg"
import des3 from "/public/des3.jpg"
import des4 from "/public/des4.jpg"
import des5 from "/public/des5.jpg"
import des6 from "/public/des6.jpg"
import des7 from "/public/des7.jpg"
import des8 from "/public/des8.jpg"
import des9 from "/public/des9.jpg"
import des10 from "/public/des10.jpg"
import des11 from "/public/des11.jpg"
import des12 from "/public/des12.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../../../lib/nextarrow";
import PrevArrow from "../../../lib/prevarrow";
import { Link } from "react-router-dom";


function QualficitaionsCard() {

    const softwareDevelopers = [
      {
          id: 1,
          name: "UI/UX dizayner",
          title: "İstifadəçi interfeysi dizaynı və inkişafı ilə məşğuldur.",
          image: des11,
      },
      {
          id: 2,
          name: "Kibertəhlükəsizlik analitiki",
          title: "Təhlükəsizlik pozuntularının qarşısının alınması ilə məşğuldur",
          image: des2,
      },
      {
          id: 3,
          name: "Data scientist",
          title: "Məlumatların təhlili və təqdimi ilə məşğuldur.",
          image: des3,
      },
      {
          id: 4,
          name: "Backend Developer",
          title: "Server tərəfi tətbiqləri və verilənlər bazaları ilə işləyir.",
          image: des4,
      },
      {
          id: 5,
          name: "Biznes Analitik",
          title: "Təşkilatların strateji qərarlarını dəstəkləmək üçün məlumatları analiz edən və təşkilati prosesləri optimallaşdırmaq üçün tövsiyələr verən mütəxəssislərdir.",
          image: des5,
      },
      {
          id: 6,
          name: "Blokçeyn mühəndisi",
          title: "blokçeyn texnologiyasına əsaslanan həllərin hazırlanması, tətbiqi və idarə edilməsi ilə məşğul olan mütəxəssisdir.",
          image: des6,
      },
      {
          id: 7,
          name: "Digital marketinq mütəxəssisi",
          title: "Digital Marketinq mütəxəssisləri bir markanın rəqəmsal mühitdə tanınması, müştəriyə çatması və müştəri əlaqələrinin qurulmasını təmin edən mütəxəssislərdir.",
          image: des7,
      },
      {
          id: 8,
          name: "Frontend developer",
          title: "Frontend Developer bir tətbiq və ya veb səhifənin istifadəçi qarşısında görünən hissəsini hazırlayan və onun istifadəçi təcrübəsini yüksək səviyyədə təmin edən mütəxəssisdir.",
          image: des8,
      },
      {
          id: 9,
          name: "Məhsul Sahibi",
          title: "Product Owner (Məhsul Sahibi) layihə komandasında müştəri tələblərini, bazar ehtiyaclarını və biznes məqsədlərini təmsil edən əsas şəxslərdən biridir.",
          image: des9,
      },
      {
          id: 10,
          name: "QA mühəndisi",
          title: "Keyfiyyətə nəzarət (Quality Assurance - QA) mühəndisləri proqram təminatının və ya məhsulun müəyyən olunan tələblərə uyğun və yüksək keyfiyyətdə işləməsini təmin edən mütəxəssislərdir.",
          image: des10,
      },
      {
          id: 11,
          name: "Sosial media meneceri",
          title: "Sosial Media Menecerləri, şirkətlərin və markaların sosial mediada tanıtmaq, izləyicilərlə əlaqə qurmaq və onların markayla bağlı müsbət təəssürat yaratmasını təmin etmək üçün çalışan mütəxəssislərdir.",
          image: des11,
      },
      {
          id: 12,
          name: "Portfolio analitik",
          title: "Portfolio Analitik (Portfolio Analyst), investisiya portfellərinin performansını təhlil edən, riskləri idarə edən və optimallaşdırma strategiyaları hazırlayan mütəxəssisdir.",
          image: des12,
      },
  
    // {
    //   name: "Frontend Developer",
    //   title: "İstifadəçi interfeysi dizaynı və inkişafı ilə məşğuldur.",
    //   image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    // },
    // {
    //   name: "Backend Developer",
    //   title: "Server tərəfi tətbiqləri və verilənlər bazaları ilə işləyir.",
    //   image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   name: "Full Stack Developer",
    //   title: "Həm frontend, həm də backend inkişaf edə bilən proqramçı.",
    //   image: "https://images.unsplash.com/photo-1511376777868-611b54f68947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   name: "Mobile Developer",
    //   title: "Mobil tətbiq inkişafı ilə məşğuldur.",
    //   image: "https://images.unsplash.com/photo-1533906966484-a9c978a3f090?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   name: "DevOps Engineer",
    //   title: "İnkişaf və əməliyyat proseslərini birləşdirir.",
    //   image: "https://images.unsplash.com/photo-1599949104055-2d04026aee1e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   name: "Data Scientist",
    //   title: "Veri analizi və modeləşdirmə ilə məşğuldur.",
    //   image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    // },
    // {
    //   name: "QA Engineer",
    //   title: "Proqram təminatının keyfiyyətini test edir və təmin edir.",
    //   image: "https://images.unsplash.com/photo-1570215170761-f056128eda48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   name: "Game Developer",
    //   title: "Video oyunları tasarlar ve geliştirir.",
    //   image: "https://www.baker.edu/wp-content/uploads/game-developer-degree.jpg",
    // },
    // {
    //   name: "UI/UX Designer",
    //   title: "İstifadəçi təcrübəsi və interfeys dizaynı ilə məşğuldur.",
    //   image: "https://wp.globaluniversitysystems.com/ue/wp-content/uploads/sites/9/2021/12/uxuidesign_erina-baftiroska_2800x1200px.png?w=1380&h=776&crop=1",
    // },
    // {
    //   name: "Security Engineer",
    //   title: "Proqram təminatının təhlükəsizliyini təmin edir.",
    //   image: "https://cdn2.hubspot.net/hubfs/3346459/images/blog-images/do-you-have-what-it-takes-to-be-a-senior-security-engineer-at-compuquip.jpg",
    // },
  ];

  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }


  return (
    <>
      <div className='qualific-section-header mt-[130px] '>
        <div className='container'>
          <div className='qualifictions-header-text text-center mb-8'>
            <Link to="/ixtisaslar">
            <h2 className="text-dark-cyan text-[50px] leading-[70px] font-semibold pb-2">Özünə Uyğun İxtisası Seç</h2>
            </Link>
            <p className="text-[20px] leading-[30px] font-medium text-very-dark-gray">Bu günün ixtisasları: texnologiya, kreativlik və analitika!</p>
          </div>
        </div>
      </div>
      <div className='qualifictions-section-card font-jakarta relative'>
        <div className='container'>
          <div className='row'>
            <Slider {...settings}>
              {softwareDevelopers.map(soft => (
                <div className="lg:px-12 mt-10">
                  <article className="overflow-hidden px-[22px] py-4 rounded-3xl border border-gray-100 bg-white shadow-lg">
                    <img
                      alt="softwareimg"
                      src={soft.image}
                      className="h-56 w-full object-cover rounded-3xl"
                    />
                    <div className="p-4 sm:p-6">
                      <Link to={`/ixtisas/${soft.id}`}>
                        <h3 className="text-[20px] font-medium text-black leading-[25.2px]">
                          {soft.name}
                        </h3>
                      </Link>
                      <p className="mt-2 text-[16px] text-gray-500 font-normal line-clamp-2 leading-[20.16px] pt-3">
                        {soft.title}
                      </p>
                      <Link to={`/ixtisas/${soft.id}`} className="text-[16px] flex justify-end group mt-4 text-sm font-medium text-dark-cyan leading-[20.16px] pt-8">
                        Daha çox
                      </Link>
                    </div>
                  </article>
                </div>
              )
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default QualficitaionsCard