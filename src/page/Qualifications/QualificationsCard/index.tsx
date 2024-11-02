import { Link } from "react-router-dom";

function QualificationsPageCard() {

    const softwareDevelopers = [
        {
            name: "Frontend Developer",
            title: "İstifadəçi interfeysi dizaynı və inkişafı ilə məşğuldur.",
            image: "https://s3-alpha-sig.figma.com/img/9907/a69a/3ba390729c50650e3f02d181644d8e01?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=asfRbVRM16oYNYZz8lB~mKd4WsDXqJWEfk7JGQ2d1nXmGxeb-qSnUu~vHSZX7GWagfLRxih3ZrXs9oDCePLAYEJ5xa4h5dkiCn8R7mWdYu0fOMCSBeGo3OFIaCvlQAocYQQpm609DlXyZGGHWSljMyD1G1VxngOd7ddihx0mTCSMuikndmJE~-FZL7nlDjzt14~wnKvARe5kfHrktNV1UkQFZ4T4I8Ocq1ekf1WtrXa6wPyWnrwAThiBY3CSfBWx1GMPIf~Qv8lKmK0FMQbUyOlCfw0fcZdMEjFtWQJVG7VHqEkUpwqWZ7qh110mv7jirJybwg5GTjj4Pg7t3xgAUg__",
        },
        {
            name: "Backend Developer",
            title: "Server tərəfi tətbiqləri və verilənlər bazaları ilə işləyir.",
            image: "https://s3-alpha-sig.figma.com/img/dee5/579a/d6a359121776093c9475783547e983b1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecB3beoJMjSsOvtFliCMbNoE70jYrz7fnslQMom8mpW5THtyk-NY-guhzvV52We2LyJcknEfp0gehRYqJTEeYtD6uYvWE2kGU8BTl~c9~sSFPZXE-WM8gDhIdMW0ANdjJa5JmGJpfX-HJfDxmK0JenFaTueRao-5MPgJi9qvSgMH4AZsIGDF~0zMfoYM-JOIz0yYeHwcglPtOBNQMezx4u~ntHPlH-Vcl77g6f7FEcL7ruL190ONb01lhL~27dftqEhBq2PAumgZqC7unh7WDslvDhjaCF41WIb-0lX~tv5yP9zpNKWs9TsFeFdW95x4tUK5bWH3VUCfIlAsPdM7sA__",
        },
        {
            name: "UI/UX Designer",
            title: "İstifadəçi təcrübəsi və interfeys dizaynı ilə məşğuldur.",
            image: "https://wp.globaluniversitysystems.com/ue/wp-content/uploads/sites/9/2021/12/uxuidesign_erina-baftiroska_2800x1200px.png?w=1380&h=776&crop=1",
        },
        {
            name: "Frontend Developer",
            title: "İstifadəçi interfeysi dizaynı və inkişafı ilə məşğuldur.",
            image: "https://s3-alpha-sig.figma.com/img/9907/a69a/3ba390729c50650e3f02d181644d8e01?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=asfRbVRM16oYNYZz8lB~mKd4WsDXqJWEfk7JGQ2d1nXmGxeb-qSnUu~vHSZX7GWagfLRxih3ZrXs9oDCePLAYEJ5xa4h5dkiCn8R7mWdYu0fOMCSBeGo3OFIaCvlQAocYQQpm609DlXyZGGHWSljMyD1G1VxngOd7ddihx0mTCSMuikndmJE~-FZL7nlDjzt14~wnKvARe5kfHrktNV1UkQFZ4T4I8Ocq1ekf1WtrXa6wPyWnrwAThiBY3CSfBWx1GMPIf~Qv8lKmK0FMQbUyOlCfw0fcZdMEjFtWQJVG7VHqEkUpwqWZ7qh110mv7jirJybwg5GTjj4Pg7t3xgAUg__",
        },
        {
            name: "Backend Developer",
            title: "Server tərəfi tətbiqləri və verilənlər bazaları ilə işləyir.",
            image: "https://s3-alpha-sig.figma.com/img/dee5/579a/d6a359121776093c9475783547e983b1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecB3beoJMjSsOvtFliCMbNoE70jYrz7fnslQMom8mpW5THtyk-NY-guhzvV52We2LyJcknEfp0gehRYqJTEeYtD6uYvWE2kGU8BTl~c9~sSFPZXE-WM8gDhIdMW0ANdjJa5JmGJpfX-HJfDxmK0JenFaTueRao-5MPgJi9qvSgMH4AZsIGDF~0zMfoYM-JOIz0yYeHwcglPtOBNQMezx4u~ntHPlH-Vcl77g6f7FEcL7ruL190ONb01lhL~27dftqEhBq2PAumgZqC7unh7WDslvDhjaCF41WIb-0lX~tv5yP9zpNKWs9TsFeFdW95x4tUK5bWH3VUCfIlAsPdM7sA__",
        },
        {
            name: "UI/UX Designer",
            title: "İstifadəçi təcrübəsi və interfeys dizaynı ilə məşğuldur.",
            image: "https://wp.globaluniversitysystems.com/ue/wp-content/uploads/sites/9/2021/12/uxuidesign_erina-baftiroska_2800x1200px.png?w=1380&h=776&crop=1",
        },
        {
            name: "Frontend Developer",
            title: "İstifadəçi interfeysi dizaynı və inkişafı ilə məşğuldur.",
            image: "https://s3-alpha-sig.figma.com/img/9907/a69a/3ba390729c50650e3f02d181644d8e01?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=asfRbVRM16oYNYZz8lB~mKd4WsDXqJWEfk7JGQ2d1nXmGxeb-qSnUu~vHSZX7GWagfLRxih3ZrXs9oDCePLAYEJ5xa4h5dkiCn8R7mWdYu0fOMCSBeGo3OFIaCvlQAocYQQpm609DlXyZGGHWSljMyD1G1VxngOd7ddihx0mTCSMuikndmJE~-FZL7nlDjzt14~wnKvARe5kfHrktNV1UkQFZ4T4I8Ocq1ekf1WtrXa6wPyWnrwAThiBY3CSfBWx1GMPIf~Qv8lKmK0FMQbUyOlCfw0fcZdMEjFtWQJVG7VHqEkUpwqWZ7qh110mv7jirJybwg5GTjj4Pg7t3xgAUg__",
        },
        {
            name: "Backend Developer",
            title: "Server tərəfi tətbiqləri və verilənlər bazaları ilə işləyir.",
            image: "https://s3-alpha-sig.figma.com/img/dee5/579a/d6a359121776093c9475783547e983b1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecB3beoJMjSsOvtFliCMbNoE70jYrz7fnslQMom8mpW5THtyk-NY-guhzvV52We2LyJcknEfp0gehRYqJTEeYtD6uYvWE2kGU8BTl~c9~sSFPZXE-WM8gDhIdMW0ANdjJa5JmGJpfX-HJfDxmK0JenFaTueRao-5MPgJi9qvSgMH4AZsIGDF~0zMfoYM-JOIz0yYeHwcglPtOBNQMezx4u~ntHPlH-Vcl77g6f7FEcL7ruL190ONb01lhL~27dftqEhBq2PAumgZqC7unh7WDslvDhjaCF41WIb-0lX~tv5yP9zpNKWs9TsFeFdW95x4tUK5bWH3VUCfIlAsPdM7sA__",
        },
        {
            name: "UI/UX Designer",
            title: "İstifadəçi təcrübəsi və interfeys dizaynı ilə məşğuldur.",
            image: "https://wp.globaluniversitysystems.com/ue/wp-content/uploads/sites/9/2021/12/uxuidesign_erina-baftiroska_2800x1200px.png?w=1380&h=776&crop=1",
        },
        {
            name: "Frontend Developer",
            title: "İstifadəçi interfeysi dizaynı və inkişafı ilə məşğuldur.",
            image: "https://s3-alpha-sig.figma.com/img/9907/a69a/3ba390729c50650e3f02d181644d8e01?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=asfRbVRM16oYNYZz8lB~mKd4WsDXqJWEfk7JGQ2d1nXmGxeb-qSnUu~vHSZX7GWagfLRxih3ZrXs9oDCePLAYEJ5xa4h5dkiCn8R7mWdYu0fOMCSBeGo3OFIaCvlQAocYQQpm609DlXyZGGHWSljMyD1G1VxngOd7ddihx0mTCSMuikndmJE~-FZL7nlDjzt14~wnKvARe5kfHrktNV1UkQFZ4T4I8Ocq1ekf1WtrXa6wPyWnrwAThiBY3CSfBWx1GMPIf~Qv8lKmK0FMQbUyOlCfw0fcZdMEjFtWQJVG7VHqEkUpwqWZ7qh110mv7jirJybwg5GTjj4Pg7t3xgAUg__",
        },
        {
            name: "Backend Developer",
            title: "Server tərəfi tətbiqləri və verilənlər bazaları ilə işləyir.",
            image: "https://s3-alpha-sig.figma.com/img/dee5/579a/d6a359121776093c9475783547e983b1?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecB3beoJMjSsOvtFliCMbNoE70jYrz7fnslQMom8mpW5THtyk-NY-guhzvV52We2LyJcknEfp0gehRYqJTEeYtD6uYvWE2kGU8BTl~c9~sSFPZXE-WM8gDhIdMW0ANdjJa5JmGJpfX-HJfDxmK0JenFaTueRao-5MPgJi9qvSgMH4AZsIGDF~0zMfoYM-JOIz0yYeHwcglPtOBNQMezx4u~ntHPlH-Vcl77g6f7FEcL7ruL190ONb01lhL~27dftqEhBq2PAumgZqC7unh7WDslvDhjaCF41WIb-0lX~tv5yP9zpNKWs9TsFeFdW95x4tUK5bWH3VUCfIlAsPdM7sA__",
        },
        {
            name: "UI/UX Designer",
            title: "İstifadəçi təcrübəsi və interfeys dizaynı ilə məşğuldur.",
            image: "https://wp.globaluniversitysystems.com/ue/wp-content/uploads/sites/9/2021/12/uxuidesign_erina-baftiroska_2800x1200px.png?w=1380&h=776&crop=1",
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
                <div className='qualifictions-section-card grid grid-cols-3 font-jakarta relative mb-[110px]'>
                    {softwareDevelopers.map(soft => (
                        <div className='row'>
                            <div className="lg:px-12 mt-10">
                                <article className="overflow-hidden px-[22px] py-4 rounded-3xl border border-gray-100 bg-white shadow-lg">
                                    <img
                                        alt="softwareimg"
                                        src={soft.image}
                                        className="h-56 w-full object-cover rounded-3xl"
                                    />
                                    <div className="p-4 sm:p-6">
                                        <Link to={`/ixtisas/${soft.name}`}>
                                            <h3 className="text-[20px] font-medium text-black leading-[25.2px]">
                                                {soft.name}
                                            </h3>
                                        </Link>
                                        <p className="mt-2 text-[16px] text-gray-500 font-normal line-clamp-2 leading-[20.16px] pt-3">
                                            {soft.title}
                                        </p>
                                        <Link to={`/ixtisas/${soft.name}`} className="text-[16px] flex justify-end group mt-4 text-sm font-medium text-dark-cyan leading-[20.16px] pt-8">
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