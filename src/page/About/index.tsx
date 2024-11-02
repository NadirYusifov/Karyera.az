import HeroImg from '/public/HeroAbout.png'

function About() {
    return (
        <>
            <section className="about-section">
                <div className="about-wrapper">
                    <div className="about-hero">
                        <img className='w-full' src={HeroImg} />
                    </div>
                    <div className="about-header-section">
                        <div className='about-header-wrapper bg-black/65'>
                            <div className="container">
                                <div className='about-header-content text-white text-[38px] py-2'>
                                    <h3>Haqqımızda</h3>
                                </div>
                            </div>
                        </div>
                        <div className="about-main-wrapper bg-white shadow-lg py-7">
                            <div className="container">
                                <div className="about-main-content text-mostly-black text-[20px] lg:text-[18px] font-normal leading-[26.32px]">
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