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
                                <div className="about-main-content text-mostly-black text-[20px] lg:text-[25px] font-normal leading-[40.32px]">
                                    <p>Lorem ipsum dolor sit amet consectetur. Fringilla facilisis fringilla at mauris. Molestie nisl nisl massa ultrices malesuada diam magna dui. Ac lectus adipiscing vehicula tempor aliquet sit dui. Ultrices amet et urna et facilisi sit lorem id. Ultrices vitae elit vestibulum et eu volutpat vel quisque. Hac suscipit sed duis dignissim dictum porta feugiat cras venenatis. Pellentesque rutrum ullamcorper velit orci egestas. Id sit libero quisque sed. Ac integer diam vitae parturient integer risus. Pellentesque rutrum ullamcorper velit orci egestas. Id sit libero quisque sed. Ac integer diam vitae parturient integer risus.</p>
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