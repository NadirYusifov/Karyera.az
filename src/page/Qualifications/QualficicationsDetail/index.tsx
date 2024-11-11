import { useParams } from "react-router-dom";
import des2 from "/public/des2.jpg"
import des3 from "/public/des3.jpg"
import des4 from "/public/des4.jpg"
import des5 from "/public/des5.jpg"
import des6 from "/public/des6.jpg"
// import des7 from "/public/des7.jpg"
import des8 from "/public/des8.jpg"
import des9 from "/public/des9.jpg"
import des10 from "/public/des10.jpg"
import des11 from "/public/des11.jpg"
import des12 from "/public/des12.jpg"

function QualificationsDetail() {
    const { id } = useParams();
    const details = [
        {
            id: 1,
            name: "UI/UX dizayner",
            title: "UI/UX dizaynerləri veb saytların, mobil tətbiqlərin və digər rəqəmsal məhsulların istifadəsini və görünüşünü təkmilləşdirmək üçün çalışan mütəxəssislərdir. Onların əsas məqsədi istifadəçi məmnuniyyətini artırmaq, interfeysin funksionallığını və dizayn estetikasını balanslaşdırmaqdır. UI (İstifadəçi İnterfeysi) dizaynerləri vizual elementlərin qurulmasına, UX (İstifadəçi Təcrübəsi) dizaynerləri isə məhsulun ümumi istifadə rahatlığına diqqət yetirir.",
            vezife: [
                "1. <strong>İstifadəçi təcrübəsini araşdırmaq və təhlil etmək</strong> - İstifadəçi tələblərini və gözləntilərini anlamaq üçün istifadəçi tədqiqatı və analitiklər vasitəsilə məlumat toplamaq. Bu tədqiqat, istifadəçinin vebsayt və ya tətbiqlə qarşılıqlı əlaqələrini anlamağa kömək edir.",
                "2. <strong>Wireframe və prototiplərin yaradılması</strong> - Məhsulun ilkin dizaynını yaratmaq üçün wirefram-lar (skelet modellər) və interaktiv prototiplər hazırlamaq. Bu, məhsulun vizual quruluşunu və funksionallığını əvvəlcədən göstərir.",
                "3. <strong>İstifadəçi axını (User Flow) dizaynı</strong> - İstifadəçilərin məhsulda necə hərəkət edəcəklərini anlamaq üçün istifadəçi axınlarını qurmaq. Bu, məhsulun funksionallığının və istifadə asanlığının təmin edilməsi üçün vacibdir.",
                "4. <strong>UI elementlərinin dizaynı</strong> - Düğmələr, ikonlar, menyular və digər vizual elementləri yaradaraq interfeysin estetik və funksional olmasını təmin etmək. Məqsəd interfeysin həm cəlbedici, həm də istifadəsi rahat olmasıdır.",
                "5. <strong>Prototipləri test etmək və rəy toplamaq</strong> - Yaradılan dizaynların və prototiplərin istifadəçilər tərəfindən test edilməsini təşkil etmək. Toplanan rəy əsasında dizaynda dəyişikliklər etmək və təkmilləşdirmələr aparmaq.",
                "6. <strong>Dizayn trendlərinə uyğun işləmək</strong> - Rəqəmsal məhsul dizaynında mövcud trendləri izləmək və məhsullarda ən müasir yanaşmaları tətbiq etmək. Bu, istifadəçilərin gözləntilərinə uyğun dizaynlar yaratmağa kömək edir.",
                "7. <strong>Komanda ilə sıx əməkdaşlıq</strong> - İnkişaf etdiricilər, marketinq mütəxəssisləri və məhsul menecerləri ilə sıx əlaqədə işləyərək dizaynın tətbiqi prosesini təmin etmək. UX dizayneri məhsulun funksionallığına fokuslandığı halda, UI dizayneri məhsulun görünüşünü tamamlayır.",
            ],
            learn: [
                "1. <strong>Qrafik Dizayn və Rəqəmsal Dizayn</strong> - Vizual dizayn, qrafik dizayn prinsipləri və rəqəmsal vasitələrlə işləmə bacarıqları.",
                "2. <strong>İnteraksiya Dizaynı (Interaction Design)</strong> - İstifadəçilərlə qarşılıqlı əlaqələrin dizaynı sahəsində ixtisaslaşmış biliklər.",
                "3. <strong>İnsan-Kompyuter Qarşılıqlı Əlaqəsi (HCI)</strong> - İnsanların texnologiyalarla qarşılıqlı əlaqəsini araşdıran akademik sahə. Bu sahədə təhsil istifadəçi təcrübəsini daha yaxşı başa düşməyə kömək edir.",
                "4. <strong>Rəqəmsal Məhsul Dizaynı</strong> - Rəqəmsal məhsulların hazırlanması və dizaynı sahəsində ixtisaslaşmış təhsil."
            ],
            certificate: [
                "• <strong>Qrafik Dizayn və ya İstifadəçi Təcrübəsi üzrə dərəcə</strong> - Bu sahələrdə ixtisaslaşmış universitet təhsili UI/UX dizayner olmaq üçün vacibdir.",
                "• <strong>Interaction Design Foundation Sertifikatları</strong> - UX və UI dizayn sahəsində təlimlər və kurslar keçirən bu qurum dizaynerlər üçün önəmlidir.",
                "• <strong>Google UX Design Professional Certificate</strong> - UX dizaynı sahəsində fundamental biliklər təklif edən Google-un sertifikat proqramı.",
                "• <strong>Adobe Certified Expert (ACE)</strong> - Adobe vasitələrini peşəkar səviyyədə istifadə etməyi təsdiqləyən bu sertifikat UI dizaynerləri üçün vacibdir."
            ],

            image: des11,
        },
        {
            "id": 2,
            "name": "Kibertəhlükəsizlik analitiki",
            "title": "Kibertəhlükəsizlik analitikləri, təşkilatın məlumatlarını, sistemlərini və şəbəkələrini qorumaq məqsədilə təhlükəsizlik pozuntularının qarşısını almaq və potensial təhdidləri aşkarlamaq üçün çalışan mütəxəssislərdir. Onların əsas vəzifəsi məlumat təhlükəsizliyi tədbirlərini tətbiq edərək təşkilatın rəqəmsal təhlükəsizlik strategiyasını inkişaf etdirməkdir.",
            "vezife": [
                "1. <strong>Təhlükəsizlik zəifliklərinin aşkarlanması</strong> - Sistemdə olan təhlükəsizlik boşluqlarını və zəiflikləri müəyyənləşdirərək, riskləri azaldacaq tədbirlər təklif etmək.",
                "2. <strong>Günlük və fəaliyyət monitorinqi</strong> - Şəbəkə və sistem fəaliyyətini izləyərək şübhəli fəaliyyətləri vaxtında aşkarlamaq və reaksiya vermək.",
                "3. <strong>Təhlükəsizlik tədbirlərinin tətbiqi</strong> - Antivirus, firewall, şifrələmə kimi təhlükəsizlik tədbirlərini tətbiq edərək, məlumatların və sistemlərin qorunmasını təmin etmək.",
                "4. <strong>Təhlükəsizlik insidentlərinə reaksiya</strong> - Hər hansı təhlükəsizlik pozuntusu baş verdikdə insidentlərin idarə olunması və müvafiq tədbirlər görmək.",
                "5. <strong>Penetrasiya testlərinin aparılması</strong> - Təhlükəsizlik zəifliklərini müəyyən etmək üçün sistemdə testlər aparmaq və nəticələrə əsasən tədbirlər təklif etmək.",
                "6. <strong>Təhlükəsizlik protokollarının yenilənməsi</strong> - Təşkilatın təhlükəsizlik siyasətlərini və protokollarını mütəmadi olaraq nəzərdən keçirmək və yeniləmək.",
                "7. <strong>Komanda ilə əməkdaşlıq</strong> - İnformasiya texnologiyaları, hüquq və digər komanda üzvləri ilə sıx əməkdaşlıq edərək təhlükəsizlik tədbirlərinin tətbiqini təmin etmək."
            ],
            "learn": [
                "1. <strong>Şəbəkə Təhlükəsizliyi</strong> - Şəbəkələrin təhlükəsizliyini təmin edən əsas texnologiyalar və metodlar.",
                "2. <strong>Kriptoqrafiya və Şifrələmə</strong> - Məlumatların qorunması üçün şifrələmə metodları və kriptoqrafiya prinsipləri.",
                "3. <strong>Təhlükəsizlik Monitorinqi və Analitikası</strong> - Təhlükəsizlik insidentlərini və hadisələrini izləmək və analiz etmək bacarıqları.",
                "4. <strong>Penetrasiya Testi və Etik Hacking</strong> - Təhlükəsizlik zəifliklərini aşkarlamaq üçün sistemlərdə sınaqların aparılması və təhlükəsizlik boşluqlarının aradan qaldırılması üzrə biliklər."
            ],
            "certificate": [
                "• <strong>Certified Information Systems Security Professional (CISSP)</strong> - Təhlükəsizlik mütəxəssisləri üçün ən çox tələb olunan sertifikat.",
                "• <strong>CompTIA Security+</strong> - Fundamental təhlükəsizlik bacarıqlarını təsdiqləyən sertifikat.",
                "• <strong>Certified Ethical Hacker (CEH)</strong> - Etik hacking üzrə ixtisaslaşma sertifikatı.",
                "• <strong>GIAC Security Essentials (GSEC)</strong> - Təhlükəsizlik prinsiplərini və şəbəkə təhlükəsizliyini əhatə edən sertifikat."
            ],
            "image": des2
        }
        ,
        {
            "id": 3,
            "name": "Data scientist",
            "title": "Data scientistlər, geniş həcmli məlumatları təhlil edərək iş qərarlarını dəstəkləmək və məlumatlara əsaslanan strategiyalar hazırlamaq üçün çalışan mütəxəssislərdir. Onların əsas vəzifəsi məlumatlardan istifadə edərək təşkilatın biznes məqsədlərinə uyğun analizlər aparmaqdır.",
            "vezife": [
                "1. <strong>Məlumat toplama və təmizləmə</strong> - Məlumat mənbələrindən məlumatları toplamaq və analiz üçün hazırlamaq.",
                "2. <strong>Statistik analiz və modelləşdirmə</strong> - Məlumatlardan mənalı nəticələr çıxarmaq və müxtəlif modellər yaratmaq.",
                "3. <strong>Maşın öyrənməsi modellərinin yaradılması</strong> - Proqnozlaşdırma və analitik tapşırıqlar üçün maşın öyrənməsi modellərini inkişaf etdirmək.",
                "4. <strong>Məlumat vizualizasiyası</strong> - Məlumatları asan başa düşülən şəkildə təqdim etmək üçün vizualizasiya vasitələrindən istifadə etmək.",
                "5. <strong>Biznes problemlərini həll etmək üçün analiz</strong> - Biznes məqsədlərinə uyğun olaraq məlumatlar əsasında strategiyalar hazırlamaq."
            ],
            "learn": [
                "1. <strong>Statistika və ehtimal nəzəriyyəsi</strong> - Məlumatların təhlili üçün statistik üsullar.",
                "2. <strong>Maşın öyrənməsi</strong> - Proqnozlaşdırıcı modellər qurmaq üçün maşın öyrənməsi prinsipləri.",
                "3. <strong>Məlumatların təmizlənməsi və işlənməsi</strong> - Məlumatların analiz üçün hazırlanması.",
                "4. <strong>Proqramlaşdırma</strong> - Python, R kimi dillərdə məlumat analizini həyata keçirmək bacarıqları."
            ],
            "certificate": [
                "• <strong>Data Science Certificate</strong> - Coursera, Udacity kimi platformalardan verilən sertifikatlar.",
                "• <strong>Google Data Analytics Professional Certificate</strong> - Data analitikası sahəsində biliklər verən sertifikat.",
                "• <strong>IBM Data Science Professional Certificate</strong> - Data science bacarıqlarını təsdiqləyən sertifikat."
            ],
            "image": des3
        },
        {
            "id": 4,
            "name": "Backend Developer",
            "title": "Backend Developer, server tərəfi tətbiqlərin və verilənlər bazalarının işləməsi və inteqrasiyası ilə məşğul olan mütəxəssisdir.",
            "vezife": [
                "1. <strong>Server və verilənlər bazası arxitekturasının hazırlanması</strong> - Server tərəfi arxitekturanı dizayn etmək.",
                "2. <strong>API-lərin yaradılması</strong> - Ön tərəflə arxa tərəf arasında məlumat mübadiləsini təmin edən API-lər yaratmaq.",
                "3. <strong>Məlumat bazalarının idarə edilməsi</strong> - Məlumat bazasının layihələndirilməsi və optimallaşdırılması.",
                "4. <strong>Təhlükəsizlik tədbirlərinin tətbiqi</strong> - Tətbiqin təhlükəsizliyini təmin etmək üçün tədbirlər görmək.",
                "5. <strong>Yüksək performansın təmin edilməsi</strong> - Sistemlərin sürətli və davamlı işləməsini təmin etmək üçün optimallaşdırmalar etmək."
            ],
            "learn": [
                "1. <strong>Proqramlaşdırma dilləri</strong> - Java, Python, PHP və digər backend dilləri.",
                "2. <strong>Verilənlər bazası idarəetmə</strong> - SQL, NoSQL bazalarının idarə olunması.",
                "3. <strong>API və web servis texnologiyaları</strong> - REST, GraphQL kimi texnologiyalar.",
                "4. <strong>Server arxitekturası</strong> - Tətbiq serverlərinin qurulması və idarə edilməsi."
            ],
            "certificate": [
                "• <strong>Oracle Certified Professional, Java SE</strong> - Java proqramlaşdırma üzrə sertifikat.",
                "• <strong>Microsoft Certified: Azure Developer Associate</strong> - Bulud xidmətlərində backend inkişafı üzrə sertifikat.",
                "• <strong>MongoDB Certified Developer Associate</strong> - NoSQL bazalarında ixtisaslaşma sertifikatı."
            ],
            "image": des4
        },
        {
            "id": 5,
            "name": "Biznes Analitik",
            "title": "Biznes Analitikləri, təşkilatların məlumatlarını analiz edərək strateji qərarların verilməsinə kömək edən mütəxəssislərdir.",
            "vezife": [
                "1. <strong>Məlumatların təhlili</strong> - Strateji qərarları dəstəkləmək üçün məlumatları analiz etmək.",
                "2. <strong>Məlumatlardan istifadə edərək problemlərin həlli</strong> - İş proseslərini optimallaşdırmaq üçün məlumatlardan istifadə etmək.",
                "3. <strong>Məlumat hesabatlarının hazırlanması</strong> - Məlumatları vizualizasiya edərək nəticələri təklif etmək.",
                "4. <strong>Strategiya inkişaf etdirmək</strong> - Biznes məqsədlərinə uyğun inkişaf strategiyaları hazırlamaq.",
                "5. <strong>Rəhbərliklə sıx əməkdaşlıq</strong> - İdarəetmə komandası ilə strateji qərarları dəstəkləmək üçün işləmək."
            ],
            "learn": [
                "1. <strong>Biznes analitikası</strong> - Məlumatların analiz edilməsi və strategiya inkişafı bacarıqları.",
                "2. <strong>Proses optimallaşdırması</strong> - Təşkilati proseslərin təhlili və təkmilləşdirilməsi.",
                "3. <strong>Vizualizasiya və hesabat vasitələri</strong> - Tableau, Power BI kimi vasitələr.",
                "4. <strong>Məlumat analitikası və statistika</strong> - Strateji qərarların verilməsinə kömək edən təhlil."
            ],
            "certificate": [
                "• <strong>Certified Business Analysis Professional (CBAP)</strong> - Biznes analitikası üzrə sertifikat.",
                "• <strong>Microsoft Certified: Data Analyst Associate</strong> - Məlumat analitikası üzrə sertifikat.",
                "• <strong>Tableau Desktop Specialist</strong> - Tableau vasitəsilə məlumatların vizualizasiyası üzrə sertifikat."
            ],
            "image": des5
        },
        {
            "id": 6,
            "name": "Blokçeyn mühəndisi",
            "title": "Blokçeyn mühəndisləri, blokçeyn texnologiyasına əsaslanan həllərin hazırlanması, tətbiqi və idarə edilməsi ilə məşğul olan mütəxəssislərdir.",
            "vezife": [
                "1. <strong>Blokçeyn tətbiqlərinin yaradılması</strong> - Blokçeyn əsaslı həllər hazırlamaq.",
                "2. <strong>Smart kontraktların inkişafı</strong> - Blokçeyn əsaslı smart kontraktların yaradılması.",
                "3. <strong>Blokçeyn şəbəkələrinin idarə olunması</strong> - Blokçeyn şəbəkələrinin təhlükəsiz və davamlı işləməsini təmin etmək.",
                "4. <strong>Kriptoqrafik metodların tətbiqi</strong> - Blokçeyn təhlükəsizliyini təmin etmək üçün kriptoqrafik üsullardan istifadə etmək.",
                "5. <strong>Məlumat təhlükəsizliyinin təmin edilməsi</strong> - Blokçeyn məlumatlarının qorunması üçün tədbirlər görmək."
            ],
            "learn": [
                "1. <strong>Blokçeyn və DLT</strong> - Blokçeyn və Dağıtılmış Ledger Texnologiyaları üzrə təhsil.",
                "2. <strong>Kriptoqrafiya</strong> - Blokçeyn təhlükəsizliyi üçün kriptoqrafiya üsulları.",
                "3. <strong>Smart kontraktlar</strong> - Smart kontraktların proqramlaşdırılması və idarə edilməsi.",
                "4. <strong>Kriptoaktivlərin idarə olunması</strong> - Kriptoqrafik aktivlərin təhlükəsizliyi və idarəsi."
            ],
            "certificate": [
                "• <strong>Certified Blockchain Expert</strong> - Blokçeyn texnologiyasında ixtisaslaşma sertifikatı.",
                "• <strong>Ethereum Developer Certificate</strong> - Ethereum şəbəkəsində smart kontrakt inkişafı üzrə sertifikat.",
                "• <strong>Blockchain Developer Nanodegree</strong> - Udacity platformasından alınan ixtisas sertifikatı."
            ],
            "image": des6
        },

        {
            "id": 8,
            "name": "Frontend developer",
            "title": "Frontend Developer bir tətbiq və ya veb səhifənin istifadəçi qarşısında görünən hissəsini hazırlayan və onun istifadəçi təcrübəsini yüksək səviyyədə təmin edən mütəxəssisdir.",
            "vezife": [
                "1. <strong>UI/UX dizaynını tətbiq etmək</strong> - İnterfeysləri istifadəçi dostu etmək.",
                "2. <strong>Frontend texnologiyalardan istifadə</strong> - HTML, CSS, JavaScript kimi dillərlə inkişaf etdirmək.",
                "3. <strong>Responsiv dizayn</strong> - Veb saytın mobil və masaüstü cihazlarda düzgün görünməsini təmin etmək.",
                "4. <strong>Versiya nəzarəti</strong> - Git kimi alətlərdən istifadə edərək kod versiyalarını idarə etmək.",
                "5. <strong>Komanda ilə əməkdaşlıq</strong> - Dizaynerlər və backend inkişafçılar ilə işbirliyi qurmaq."
            ],
            "learn": [
                "1. <strong>JavaScript</strong> - Əsas frontend inkişaf dili.",
                "2. <strong>React və ya Angular</strong> - Populyar frontend çərçivələri.",
                "3. <strong>CSS preprocessors</strong> - SCSS, LESS kimi alətlərdən istifadə.",
                "4. <strong>Versiya nəzarət alətləri</strong> - Git, GitHub istifadə bacarıqları."
            ],
            "certificate": [
                "• <strong>Frontend Developer Nanodegree</strong> - Udacity tərəfindən verilən ön inkişaf üzrə sertifikat.",
                "• <strong>Responsive Web Design Certificate</strong> - freeCodeCamp tərəfindən verilən responsiv dizayn üzrə sertifikat.",
                "• <strong>JavaScript Developer Certificate</strong> - JavaScript üzrə peşəkar sertifikat."
            ],
            "image": des8
        },
        {
            "id": 9,
            "name": "Məhsul Sahibi",
            "title": "Product Owner (Məhsul Sahibi) layihə komandasında müştəri tələblərini, bazar ehtiyaclarını və biznes məqsədlərini təmsil edən əsas şəxslərdən biridir.",
            "vezife": [
                "1. <strong>Backlog idarəetməsi</strong> - Tələbləri prioritetləşdirərək backlog yaratmaq.",
                "2. <strong>Komanda ilə işbirliyi</strong> - Məqsədləri çatdırmaq üçün Scrum komandası ilə çalışmaq.",
                "3. <strong>Məhsul yol xəritəsi hazırlamaq</strong> - Strateji məqsədləri müəyyən etmək.",
                "4. <strong>İstifadəçi hekayələri yazmaq</strong> - Müştərinin tələblərini hekayələr şəklində təqdim etmək.",
                "5. <strong>Şəffaflıq təmin etmək</strong> - İrəliləyişi maraqlı tərəflərlə bölüşmək."
            ],
            "learn": [
                "1. <strong>Agile və Scrum prinsipləri</strong> - Çevik idarəetmə bilikləri.",
                "2. <strong>Müştəri əlaqələri</strong> - Müştərilərin ehtiyaclarını anlama və uyğunlaşdırma.",
                "3. <strong>İstifadəçi hekayələrinin yaradılması</strong> - Tələbləri səmərəli şəkildə təqdim etmək.",
                "4. <strong>Məhsul strategiyası</strong> - Məhsulun inkişaf strategiyalarını hazırlamaq."
            ],
            "certificate": [
                "• <strong>Certified Scrum Product Owner (CSPO)</strong> - Scrum Alliance tərəfindən təqdim olunan sertifikat.",
                "• <strong>Agile Product Management</strong> - Agile idarəetmə üzrə sertifikat.",
                "• <strong>SAFe Product Owner/Product Manager</strong> - SAFe çərçivəsi üzrə sertifikat."
            ],
            "image": des9
        },
        {
            "id": 10,
            "name": "QA mühəndisi",
            "title": "Keyfiyyətə nəzarət (Quality Assurance - QA) mühəndisləri proqram təminatının və ya məhsulun müəyyən olunan tələblərə uyğun və yüksək keyfiyyətdə işləməsini təmin edən mütəxəssislərdir.",
            "vezife": [
                "1. <strong>Test strategiyası hazırlamaq</strong> - Test planı və ssenariləri hazırlamaq.",
                "2. <strong>Manual və avtomatlaşdırılmış testlər</strong> - Əl ilə və avtomatlaşdırılmış testləri icra etmək.",
                "3. <strong>Defektlərin idarə edilməsi</strong> - Tapılan problemləri qeydə alıb təhlil etmək.",
                "4. <strong>Test nəticələrinin qiymətləndirilməsi</strong> - Test nəticələrini analiz edərək uğursuzluq səbəblərini müəyyənləşdirmək.",
                "5. <strong>Test alətləri istifadə etmək</strong> - Selenium, JIRA kimi alətləri tətbiq etmək."
            ],
            "learn": [
                "1. <strong>Test Avtomatlaşdırılması</strong> - Kodlaşdırma və test skriptləri yazma.",
                "2. <strong>Test Metodologiyaları</strong> - Agile və Waterfall test yanaşmaları.",
                "3. <strong>Defekt İdarəetməsi</strong> - Defektləri qeydə alma və idarəetmə.",
                "4. <strong>Test Alətləri</strong> - JIRA, Selenium, Postman üzrə təcrübə."
            ],
            "certificate": [
                "• <strong>ISTQB Certified Tester</strong> - Test bilikləri üzrə beynəlxalq sertifikat.",
                "• <strong>Certified Software Tester (CSTE)</strong> - Keyfiyyətə nəzarət üzrə sertifikat.",
                "• <strong>Automation Testing Certificate</strong> - Test avtomatlaşdırılması üzrə sertifikat."
            ],
            "image": des10
        },
        {
            "id": 11,
            "name": "Sosial media meneceri",
            "title": "Sosial Media Menecerləri, şirkətlərin və markaların sosial mediada tanıtmaq, izləyicilərlə əlaqə qurmaq və onların markayla bağlı müsbət təəssürat yaratmasını təmin etmək üçün çalışan mütəxəssislərdir.",
            "vezife": [
                "1. <strong>Sosial media strategiyası hazırlamaq</strong> - Şirkətin məqsədlərinə uyğun strategiya qurmaq.",
                "2. <strong>İçerik yaratmaq və idarə etmək</strong> - Sosial media üçün yaradıcı məzmun hazırlamaq.",
                "3. <strong>İzləyici əlaqələrini idarə etmək</strong> - İzləyicilərlə əlaqə yaratmaq və cavab vermək.",
                "4. <strong>Sosial media performansını analiz etmək</strong> - İstifadəçilərin davranışını təhlil etmək.",
                "5. <strong>Brend təəssüratını inkişaf etdirmək</strong> - Markaya bağlı müsbət təəssürat yaratmaq."
            ],
            "learn": [
                "1. <strong>Sosial media analitikası</strong> - Performans qiymətləndirilməsi üçün analitika bilikləri.",
                "2. <strong>Məzmun yaradılması</strong> - Yaradıcı kontent hazırlamaq.",
                "3. <strong>Platformalar üzrə biliklər</strong> - Instagram, Facebook, Twitter, LinkedIn üzrə təcrübə.",
                "4. <strong>Sosial media reklamları</strong> - Reklam kampaniyaları yaratmaq."
            ],
            "certificate": [
                "• <strong>Facebook Social Media Marketing Certificate</strong> - Sosial media üzrə biliklər.",
                "• <strong>Instagram Marketing Certification</strong> - Instagram marketinq üzrə sertifikat.",
                "• <strong>Social Media Strategy Certificate</strong> - Sosial media strategiyası üzrə sertifikat."
            ],
            "image": des11
        },
        {
            "id": 12,
            "name": "Portfolio analitik",
            "title": "Portfolio Analitik (Portfolio Analyst), investisiya portfellərinin performansını təhlil edən, riskləri idarə edən və optimallaşdırma strategiyaları hazırlayan mütəxəssisdir.",
            "vezife": [
                "1. <strong>Portfel təhlili</strong> - İnvestisiya portfelinin performansını təhlil etmək və optimallaşdırmaq.",
                "2. <strong>Risklərin idarə olunması</strong> - Portfel risklərinin idarə olunması və azaldılması üçün tədbirlər görmək.",
                "3. <strong>Maliyyə modelləşdirməsi</strong> - Portfelin inkişafı və risk qiymətləndirməsi üçün maliyyə modelləri yaratmaq.",
                "4. <strong>İnvestisiya strategiyalarının hazırlanması</strong> - Məlumatlara əsasən portfel üçün optimal investisiya strategiyaları hazırlamaq.",
                "5. <strong>Performans hesabatlarının hazırlanması</strong> - İdarəçilərə portfelin performansı ilə bağlı müntəzəm hesabatlar təqdim etmək."
            ],
            "learn": [
                "1. <strong>Maliyyə analizləri</strong> - Maliyyə məlumatlarını analiz etmək bacarıqları.",
                "2. <strong>Risk idarəetməsi</strong> - Portfel risklərinin qiymətləndirilməsi və idarə olunması.",
                "3. <strong>Maliyyə modelləri</strong> - Maliyyə modelləri hazırlamaq üçün nəzəri və praktiki biliklər.",
                "4. <strong>İnvestisiya strategiyaları</strong> - İnvestisiya strategiyalarının yaradılması və optimallaşdırılması."
            ],
            "certificate": [
                "• <strong>CFA (Chartered Financial Analyst)</strong> - Maliyyə analizləri üzrə yüksək səviyyəli beynəlxalq sertifikat.",
                "• <strong>FRM (Financial Risk Manager)</strong> - Risklərin idarə edilməsi üzrə sertifikat.",
                "• <strong>CAIA (Chartered Alternative Investment Analyst)</strong> - Alternativ investisiyalar üzrə sertifikat."
            ],
            "image": des12
        }
    ];
    const qualification = details.find(detail => detail.id === Number(id));
    return (
        <>
            <section>
                <div className="qualifications-detail-hero">
                    <div className="qualifications-detail-wrapper relative">
                        <div className="qualifications-detail-hero-image relative">
                            <img className="w-full sm:h-[400px] object-cover" src={qualification ? qualification.image : "no image"} alt="Hero Image" />
                        </div>
                        <div className="qualifications-detail-hero-content text-[20px] lg:text-[30px] w-full py-3 absolute bottom-0 text-white
                     backdrop-filter bg-opacity-60 bg-black">
                            <div className="container">
                                <h3>{qualification ? qualification.name : "İxtisas tapılmadı"}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="qualifications-detail-main-wrapper">
                    <div className="qualifications-detail-main-content bg-white shadow-md">
                        <div className="container">
                            <div className="qualifications-detail-main-header flex items-center pt-12 gap-2 text-very-dark-blue text-[20px] font-medium">
                                <span><svg width="28" height="28" viewBox="0 0 32 40" fill="none">
                                    <path d="M8 32H24V28H8V32ZM8 24H24V20H8V24ZM4 40C2.9 40 1.95867 39.6087 1.176 38.826C0.393333 38.0433 0.00133333 37.1013 0 36V4C0 2.9 0.392 1.95867 1.176 1.176C1.96 0.393333 2.90133 0.00133333 4 0H20L32 12V36C32 37.1 31.6087 38.042 30.826 38.826C30.0433 39.61 29.1013 40.0013 28 40H4ZM18 14V4H4V36H28V14H18Z" fill="#194C6F" />
                                </svg>
                                </span>
                                <h4>İxtisas təsviri</h4>
                            </div>
                            <div className="qualifications-detail-main-text text-[22px] md:text-[18px] pb-8 text-very-dark-grayish-red pt-8">
                                <p> {qualification?.title}</p>
                            </div>
                        </div>


                        <div className="container">
                            <div className="qualifications-detail-main-header flex items-center pt-4 gap-2 text-very-dark-blue text-[20px] font-medium">
                                <span><svg width="28" height="28" viewBox="0 0 32 40" fill="none">
                                    <path d="M8 32H24V28H8V32ZM8 24H24V20H8V24ZM4 40C2.9 40 1.95867 39.6087 1.176 38.826C0.393333 38.0433 0.00133333 37.1013 0 36V4C0 2.9 0.392 1.95867 1.176 1.176C1.96 0.393333 2.90133 0.00133333 4 0H20L32 12V36C32 37.1 31.6087 38.042 30.826 38.826C30.0433 39.61 29.1013 40.0013 28 40H4ZM18 14V4H4V36H28V14H18Z" fill="#194C6F" />
                                </svg>
                                </span>
                                <h4>Əsas vəzifələr</h4>
                            </div>
                            <div className="qualifications-detail-main-text text-[18px] md:text-[18px] pb-8 text-very-dark-grayish-red pt-8">
                                <div>
                                    {qualification?.vezife?.map((item, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="qualifications-detail-main-header flex items-center pt-4 gap-2 text-very-dark-blue text-[20px] font-medium">
                                <span><svg width="28" height="28" viewBox="0 0 32 40" fill="none">
                                    <path d="M8 32H24V28H8V32ZM8 24H24V20H8V24ZM4 40C2.9 40 1.95867 39.6087 1.176 38.826C0.393333 38.0433 0.00133333 37.1013 0 36V4C0 2.9 0.392 1.95867 1.176 1.176C1.96 0.393333 2.90133 0.00133333 4 0H20L32 12V36C32 37.1 31.6087 38.042 30.826 38.826C30.0433 39.61 29.1013 40.0013 28 40H4ZM18 14V4H4V36H28V14H18Z" fill="#194C6F" />
                                </svg>
                                </span>
                                <h4>Nəyi bilmək lazımdır    ?</h4>
                            </div>
                            <div className="qualifications-detail-main-text text-[18px] md:text-[18px] pb-8 text-very-dark-grayish-red pt-8">
                                <div>
                                    {qualification?.learn?.map((item, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className="container">
                            <div className="qualifications-detail-main-header flex items-center pt-4 gap-2 text-very-dark-blue text-[20px] font-medium">
                                <span><svg width="28" height="28" viewBox="0 0 32 40" fill="none">
                                    <path d="M8 32H24V28H8V32ZM8 24H24V20H8V24ZM4 40C2.9 40 1.95867 39.6087 1.176 38.826C0.393333 38.0433 0.00133333 37.1013 0 36V4C0 2.9 0.392 1.95867 1.176 1.176C1.96 0.393333 2.90133 0.00133333 4 0H20L32 12V36C32 37.1 31.6087 38.042 30.826 38.826C30.0433 39.61 29.1013 40.0013 28 40H4ZM18 14V4H4V36H28V14H18Z" fill="#194C6F" />
                                </svg>
                                </span>
                                <h4>Təhsil və Sertifikatlar</h4>
                            </div>
                            <div className="qualifications-detail-main-text text-[18px] md:text-[20px] pb-8 text-very-dark-grayish-red pt-8">
                                <div>
                                    {qualification?.certificate?.map((item, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* <section className="mt-[117px]">
            <div className="qualifications-detail-spec-wrapper">
                <div className="container">
                    <div className="qualifications-detail-spec-main">
                        <div className="qualifcations-detail-spec-main-first flex items-center gap-6 pb-5">
                            <div className="qualifcations-detail-spec-main-first-logo w-[150px] bg-very-dark-blue rounded-xl text-white flex flex-col items-center px-3 py-4 md:py-8">
                                <span>
                                    <svg width="50" height="50" viewBox="0 0 80 80" fill="none">
                                        <path d="M40 10L70 25L40 40L10 25L40 10ZM55 34.1666L70 41.6666L40 56.6666L10 41.6666L25 34.1666M55 50.8333L70 58.3333L40 73.3333L10 58.3333L25 50.8333" fill="white" />
                                        <path d="M55 34.1666L70 41.6666L40 56.6666L10 41.6666L25 34.1666M55 50.8333L70 58.3333L40 73.3333L10 58.3333L25 50.8333M40 10L70 25L40 40L10 25L40 10Z" stroke="white" stroke-width="4" />
                                    </svg>
                                </span>
                                <p className="text-[14px] text-center pt-2">Öyrənmə resursları</p>
                            </div>
                            <p className="text-[18px] lg:text-[30px] font-medium lg:leading-[55px]">Kitablar, Onlayn kurslar, İnteraktiv resurslar</p>
                        </div>

                        <hr />

                        <div className="qualifcations-detail-spec-main-second flex items-center py-5 gap-6">
                            <div className="qualifcations-detail-spec-main-second-logo w-[150px] bg-very-dark-blue rounded-xl text-white flex flex-col items-center px-5 py-4">
                                <span>
                                    <svg width="50" height="50" viewBox="0 0 59 59" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7027 40.2755C48.5944 35.258 50.4286 28.9464 49.832 22.6247C49.2354 16.3029 46.2528 10.4459 41.491 6.24518C36.7293 2.04445 30.546 -0.184439 24.1992 0.0119583C17.8524 0.208355 11.8188 2.81529 7.3259 7.3024C2.82906 11.7926 0.213606 17.8286 0.0125156 24.1802C-0.188574 30.5318 2.03984 36.7211 6.24363 41.4868C10.4474 46.2525 16.3102 49.2359 22.6373 49.829C28.9644 50.4222 35.2795 48.5804 40.2958 44.6791L40.43 44.8196L53.6692 58.0619C53.9592 58.3518 54.3034 58.5819 54.6823 58.7388C55.0611 58.8957 55.4672 58.9765 55.8773 58.9765C56.2874 58.9765 56.6934 58.8957 57.0723 58.7388C57.4512 58.5819 57.7954 58.3518 58.0854 58.0619C58.3754 57.7719 58.6054 57.4276 58.7623 57.0488C58.9192 56.6699 59 56.2639 59 55.8538C59 55.4437 58.9192 55.0376 58.7623 54.6588C58.6054 54.2799 58.3754 53.9357 58.0854 53.6457L44.8431 40.4065L44.7027 40.2755ZM38.2235 11.7186C39.9856 13.4522 41.387 15.5176 42.3469 17.7955C43.3068 20.0735 43.8062 22.519 43.8163 24.9909C43.8264 27.4628 43.3469 29.9122 42.4056 32.1979C41.4643 34.4836 40.0797 36.5604 38.3318 38.3083C36.5839 40.0562 34.5071 41.4408 32.2215 42.3821C29.9358 43.3234 27.4863 43.8029 25.0144 43.7928C22.5425 43.7827 20.097 43.2833 17.819 42.3234C15.5411 41.3635 13.4757 39.9621 11.7421 38.2C8.27754 34.6786 6.34484 29.9308 6.36495 24.9909C6.38507 20.0509 8.35637 15.3191 11.8495 11.826C15.3426 8.33287 20.0744 6.36157 25.0144 6.34145C29.9543 6.32134 34.7021 8.25404 38.2235 11.7186Z" fill="white" />
                                    </svg>
                                </span>
                                <p className="text-[14px] text-center pt-2">Tələb olunan bacarıqlar</p>
                            </div>
                            <p className="text-[18px] lg:text-[30px] font-medium lg:leading-[55px]">İstifadəçi Araşdırması, Prototipləşdirmə və Wireframing, Dizayn Proqramları</p>
                        </div>

                        <hr />

                        <div className="qualifcations-detail-spec-main-third flex items-center py-5 gap-6">
                            <div className="qualifcations-detail-spec-main-third-logo w-[150px] bg-very-dark-blue rounded-xl text-white flex flex-col items-center px-5 lg:px-3 py-4  md:py-8">
                                <span>
                                    <svg width="50" height="50" viewBox="0 0 60 54" fill="none">
                                        <path d="M51 9H42V6C42 4.4087 41.3679 2.88258 40.2426 1.75736C39.1174 0.632141 37.5913 0 36 0H24C22.4087 0 20.8826 0.632141 19.7574 1.75736C18.6321 2.88258 18 4.4087 18 6V9H9C6.61305 9 4.32387 9.94821 2.63604 11.636C0.948212 13.3239 0 15.6131 0 18V45C0 47.3869 0.948212 49.6761 2.63604 51.364C4.32387 53.0518 6.61305 54 9 54H51C53.3869 54 55.6761 53.0518 57.364 51.364C59.0518 49.6761 60 47.3869 60 45V18C60 15.6131 59.0518 13.3239 57.364 11.636C55.6761 9.94821 53.3869 9 51 9ZM24 6H36V9H24V6ZM54 45C54 45.7957 53.6839 46.5587 53.1213 47.1213C52.5587 47.6839 51.7957 48 51 48H9C8.20435 48 7.44129 47.6839 6.87868 47.1213C6.31607 46.5587 6 45.7957 6 45V28.17L20.04 33C20.3586 33.0429 20.6814 33.0429 21 33H39C39.3253 32.9936 39.6482 32.9432 39.96 32.85L54 28.17V45ZM54 21.84L38.52 27H21.48L6 21.84V18C6 17.2043 6.31607 16.4413 6.87868 15.8787C7.44129 15.3161 8.20435 15 9 15H51C51.7957 15 52.5587 15.3161 53.1213 15.8787C53.6839 16.4413 54 17.2043 54 18V21.84Z" fill="white" />
                                        <path d="M54 45C54 45.7957 53.6839 46.5587 53.1213 47.1213C52.5587 47.6839 51.7957 48 51 48H9C8.20435 48 7.44129 47.6839 6.87868 47.1213C6.31607 46.5587 6 45.7957 6 45V28.17L20.04 33C20.3586 33.0429 20.6814 33.0429 21 33H39C39.3253 32.9936 39.6482 32.9432 39.96 32.85L54 28.17V45Z" fill="white" />
                                        <path d="M54 21.84L38.52 27H21.48L6 21.84V18C6 17.2043 6.31607 16.4413 6.87868 15.8787C7.44129 15.3161 8.20435 15 9 15H51C51.7957 15 52.5587 15.3161 53.1213 15.8787C53.6839 16.4413 54 17.2043 54 18V21.84Z" fill="white" />
                                    </svg>
                                </span>
                                <p className="text-[14px] text-center pt-2">İş imkanları</p>
                            </div>
                            <p className="text-[18px] lg:text-[30px] font-medium lg:leading-[55px]">İstifadəçi Araşdırması, Prototipləşdirmə və Wireframing, Dizayn Proqramları</p>
                        </div>

                    </div>
                </div>
            </div>
        </section> */}
        </>
    )
}

export default QualificationsDetail