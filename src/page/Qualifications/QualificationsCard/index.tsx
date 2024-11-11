import { Link } from "react-router-dom";

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
function QualificationsPageCard() {

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
    ];


    return (
        <>
            <div className='qualific-section-header mt-[130px]'>
                <div className='container'>
                    <div className='qualifictions-header-text text-center mb-8'>
                        <h2 className="text-dark-cyan text-[50px] leading-[70px] font-semibold pb-2">Özünə Uyğun İxtisası Seç</h2>
                        <p className="text-[20px] leading-[30px] font-medium text-very-dark-gray">Bu günün ixtisasları: texnologiya, kreativlik və analitika!</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='qualifictions-section-card grid grid-cols-1 lg:grid-cols-3 font-jakarta relative mb-[110px] gap-x-3'>
                    {softwareDevelopers.map(soft => (
                        <div className='row'>
                            <div className="lg:px-6 mt-10">
                                <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
                                    <img
                                        alt="softwareimg"
                                        src={soft.image}
                                        className="h-56 w-full py-2 px-2 object-cover rounded-3xl"
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
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default QualificationsPageCard