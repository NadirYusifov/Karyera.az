import HeroAbout from "/public/HeroAbout.png"
import EclipseGroup from "/public/EclipseGroup.png"

function About() {
    return (
        <>
            <section className="about-section">
                <div className="about-wrapper">
                    <div className='about-header-wrapper'>
                        <div className="container">
                            <div className='about-header-content text-black text-center text-[52px] font-semibold my-6'>
                                <h3>Haqqımızda</h3>
                            </div>
                            <div className='about-hero-image relative overflow-hidden flex justify-center items-center mt-10'>
                                <img className="lg:object-cover lg:w-[1000px] lg:h-[450px]" src={HeroAbout} />
                            </div>
                            <div className='about-hero-image absolute top-0 right-0 left-0 -z-10 flex justify-center'>
                                <img className="w-full lg:h-[1000px]" src={EclipseGroup} />
                            </div>
                        </div>
                    </div>
                    <div className="about-header-section">
                        <div className="about-main-wrapper">
                            <div className="container">
                                <div className="about-main-content text-mostly-black text-[20px] lg:text-[24px] font-normal leading-[33px] my-24">
                                    <p>Biz karyera seçimlərini daha asan və dəqiq edən bir platforma yaratmaq üçün buradayıq. Karyera inkişafında yeni dövrün başlanğıcını gətirərək, süni intellektin gücündən istifadə etməklə hər kəsin öz bacarıq və maraqlarına uyğun peşəni tapmasına dəstək oluruq.
                                        Missiyamız: İnsanların potensialını maksimum səviyyəyə çıxararaq onlara özlərinə ən uyğun karyera yolunu tapmaqda kömək etməkdir. Bizim platformamız, AI dəstəyi ilə hazırlanan karyera testləri, ən yeni və innovativ ixtisaslar haqqında məlumatlar və peşəkar mentorların dəstəyi ilə hər kəsə unikal təcrübə təqdim edir.
                                        Dəyərlərimiz: İnnovasiya, şəffaflıq və fərdi inkişaf bizim üçün ən önəmli dəyərlərdir. İstifadəçilərimizə dəqiq və fərdiləşdirilmiş tövsiyələr vermək üçün ən son texnologiyalardan və biliklərdən yararlanırıq.
                                        Gələcəyinizi daha güvənli addımlarla qurmaq üçün bizimlə birgə bu səyahətə başlayın! 🚀</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About