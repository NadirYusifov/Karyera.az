import QualficitaionsHeroImg from "/public/5757453.png"

function QualificationsDetailHero() {
    return (
        <>
            <section>
                <div className="qualifications-detail-hero">
                    <div className="qualifications-detail-wrapper relative">
                        <div className="qualifications-detail-hero-image relative">
                            <img className="w-full sm:h-[400px] object-cover" src={QualficitaionsHeroImg} alt="Hero Image" />
                        </div>
                        <div className="qualifications-detail-hero-content text-[20px] lg:text-[30px] w-full py-3 absolute bottom-0 text-white
                         backdrop-filter bg-opacity-60 bg-black">
                            <div className="container">
                                <h3>UX/UI Dizayn</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QualificationsDetailHero