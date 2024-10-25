import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import image from "/public/kariyera_test.png";

const questions = [
  {
    "id": 1,
    "question": "Tapmacaları həll etməyi və ya qırılmış əşyaları təmir etməyi xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 2,
    "question": "Təsəvvür və yaradıcılığınızı istifadə etdiyiniz tapşırıqlar üzərində işləməyi üstün tutursunuzmu (məsələn, rəsm çəkmək və ya yazmaq)?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 3,
    "question": "İnsanlara kömək etməyi (dinləmək, məsləhət vermək, öyrətmək) maşın və ya texnologiya ilə işləməkdən üstün tutursunuzmu?",
    "options": ["İnsanlara kömək etmək", "Maşınlar/texnologiya ilə işləmək"]
  },
  {
    "id": 4,
    "question": "Əşyaların necə işlədiyini (məsələn, maşınlar, sistemlər və ya təbiət) öyrənməyi xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 5,
    "question": "Yeni texnologiyalar və ya vasitələrdən istifadə etməyi xoşlayırsınızmı (məsələn, proqramlar, proqram təminatı və ya cihazlar)?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 6,
    "question": "Müxtəlif mədəniyyətlər, tarix və ya insan davranışlarını öyrənməyi xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 7,
    "question": "Rəqəmlər və ya məlumatlarla işləməkdə (məsələn, büdcələşdirmə və ya məlumatların təhlili) nə qədər rahat hiss edirsiniz?",
    "options": ["Çox rahat", "Nisbətən rahat", "Rahat deyiləm"]
  },
  {
    "id": 8,
    "question": "Yeni bir şey yaratdığınız layihələrdə işləməyi, mövcud şeyləri təmir etməkdən üstün tutursunuzmu?",
    "options": ["Yeni bir şey yaratmaq", "Mövcud şeyləri təmir etmək"]
  },
  {
    "id": 9,
    "question": "Fikirlərinizi bloqlar, sosial media və ya yaradıcı məzmun vasitəsilə paylaşmağı xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 10,
    "question": "Məntiqi düşünən və tapşırıqları yerinə yetirərkən addım-addım təlimatlara üstünlük verən biri olduğunuzu düşünürsünüzmü?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 11,
    "question": "Tək işləməyi, yoxsa qrupda işləməyi üstün tutursunuz?",
    "options": ["Tək", "Qrupda"]
  },
  {
    "id": 12,
    "question": "Başqalarının problemlərini həll etməyə və ya onlara yeni şeylər öyrətməyə kömək etməyi xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 13,
    "question": "Məlumatları təşkil etməyi, yoxsa yeni yaradıcı ideyalar haqqında beyin fırtınası etməyi üstün tutursunuz?",
    "options": ["Məlumatları təşkil etmək", "Yaradıcı ideyalar haqqında beyin fırtınası etmək"]
  },
  {
    "id": 14,
    "question": "Layihədə bir qrup və ya komandaya rəhbərlik etməkdə nə qədər rahat hiss edirsiniz?",
    "options": ["Çox rahat", "Nisbətən rahat", "Narahatam"]
  },
  {
    "id": 15,
    "question": "Etika, hüquq və ya siyasət kimi mövzularda müzakirə və ya mübahisə etməyi xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 16,
    "question": "Hər gün problemləri həll etmək və ya əşyaların işini yaxşılaşdırmaq üçün yeni yollar haqqında düşünməyi xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 17,
    "question": "Öz biznesinizi başlatmaq və ya sahibkarlıq layihələri üzərində işləməkdə maraqlısınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 18,
    "question": "Bəzi risklər tələb edən qərarlar qəbul etməkdə nə qədər rahat hiss edirsiniz (məsələn, maliyyə və ya iş qərarları)?",
    "options": ["Çox rahat", "Nisbətən rahat", "Narahatam"]
  },
  {
    "id": 19,
    "question": "Süni intellekt, robototexnika və ya proqramlaşdırma kimi inkişaf edən texnologiyalarla işləməyi xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 20,
    "question": "Yaradıcı texnologiyalarla işləməyi (məsələn, tətbiq, oyun və ya rəqəmsal media dizaynı) nə qədər xoşlayırsınız?",
    "options": ["Çox xoşlayıram", "Nisbətən xoşlayıram", "Xoşlamıram"]
  },
  {
    "id": 21,
    "question": "Tamamilə yeni bir şey yaratmağı, yoxsa mövcud bir şeyi təkmilləşdirməyi üstün tutursunuz?",
    "options": ["Yeni bir şey yaratmaq", "Mövcud bir şeyi təkmilləşdirmək"]
  },
  {
    "id": 22,
    "question": "İşiniz vasitəsilə cəmiyyətə və ya ətraf mühitə müsbət təsir göstərmək sizin üçün nə qədər vacibdir?",
    "options": ["Çox vacib", "Nisbətən vacib", "Vacib deyil"]
  },
  {
    "id": 23,
    "question": "Təhsil və ya sosial proqramlar kimi icmanız üçün genişmiqyaslı layihələrdə işləməyi xoşlayırsınızmı?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 24,
    "question": "Bir vaxtda birdən çox tapşırıq və ya layihə ilə məşğul olmaqda nə qədər rahat hiss edirsiniz?",
    "options": ["Çox rahat", "Nisbətən rahat", "Narahatam"]
  },
  {
    "id": 25,
    "question": "Möhkəm qaydalara və metodlara əməl etməyi, yoxsa yeni yanaşmalar tapmaq üçün sərhədləri aşmağı üstün tutursunuz?",
    "options": ["Qaydalar və metodlara əməl etmək", "Sərhədləri aşmaq"]
  },
  {
    "id": 26,
    "question": "Sürətlə dəyişən və daim yeniləşən mühitdə işləmək barədə nə düşünürsünüz?",
    "options": ["Bunu xoşlayıram", "Sabitliyi üstün tuturam"]
  },
  {
    "id": 27,
    "question": "Problemləri dərindən təhlil etməyi və məntiqi həll yolları tapmağı xoşlayırsınızmı (məsələn, elmi, iş və ya texniki problemlər üçün)?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 28,
    "question": "Bədii və texniki bacarıqları birləşdirən bir karyerada işləməyi xoşlayırsınızmı (məsələn, qrafik dizayn, UX/UI dizaynı və ya video oyun inkişafı)?",
    "options": ["Bəli", "Xeyr"]
  },
  {
    "id": 29,
    "question": "Layihələrdə təşəbbüs göstərməyi və lider olmağı, yoxsa başqalarının təlimatlarına əməl etməyi üstün tutursunuz?",
    "options": ["Təşəbbüs göstərmək", "Təlimatlara əməl etmək"]
  },
  {
    "id": 30,
    "question": "Karyeranızın bir hissəsi olaraq yeni proqramlar, vasitələr və ya texnologiyaları öyrənmək haqqında nə düşünürsünüz?",
    "options": ["Yeni vasitələri öyrənməyə həvəsliyəm", "Bildiyim şeylərə üstünlük verirəm"]
  }
]


const Career = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizEnded, setQuizEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleBackClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setProgress(prevProgress => prevProgress - 100 / questions.length);
    }
  };

  const handleOptionClick = (opt: string) => {
    setSelectedOption(opt);
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setProgress(prevProgress => prevProgress + 100 / questions.length);
        setSelectedOption(null);
      }, 300);
    } else {
      setQuizEnded(true);
      setProgress(100);
    }
  };

  return (
    <div className="container_career block lg:flex h-screen font-jakarta">
      <div className="left-section w-full lg:w-2/5 lg:bg-very-dark-blue flex items-center justify-center">
        <div className="illustration hidden lg:block">
          <img className="w-[650px] h-[480px]" src={image} alt="Illustration" />
        </div>
      </div>
      <div className="right-section w-full h-screen lg:w-3/5 p-10 flex flex-col justify-center bg-white">
        {quizEnded ? (
          <div className="end-message">
            <h2 className="endm text-very-dark-blue text-[84px] text-center font-semibold">Təbriklər!</h2>
            <p className="endp text-center text-[#2F78AA] text-[32px] leading-[60px]"> İndi sizə ən uyğun karyera sahələrini təqdim edirik!</p>
            <button className="endb bg-very-dark-blue rounded-full py-[10px] px-10 text-white mt-[100px] ml-[550px]">Nəticə</button>
          </div>
        ) : (
          <>

            <div className="progress-bar ml-5 lg:w-[750px] h-5 bg-[#E0E0E0] rounded-full mb-5">
              <div
                className="progress-bar-fill h-full bg-[#1D4F91] rounded-full transition all ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="question-header">
              <h2 className="text-[24px] mx-[30px]">{`${currentQuestion + 1}/${questions.length}`}</h2>
              <p className="lg:w-[750px] text-[32px] my-5 mx-[30px] font-medium">{questions[currentQuestion].question}</p>
            </div>

            <div className="options flex flex-col">
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className={`option ${selectedOption === option ? "selected" : ""} flex items-center lg:w-[748px] h-[70px] rounded-full border-solid border border-very-dark-blue pl-[50px] ml-[10px] mb-[10px] text-[20px] cursor-pointer bg-white text-[#242424] text-left hover:bg-very-dark-blue hover:text-white`}>
                  <input
                    type="radio"
                    name="options"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionClick(option)}
                    style={{ display: "none" }}
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="navigation flex justify-between mt-[10px] mr-[100px] mb-0 ml-[30px]">
              {currentQuestion === 0 ? (
                <Link to='/'>
                  <h4>Ana səhifə</h4>
                </Link>
              ) : (
                <button className="back-btn" onClick={handleBackClick}>
                  Geri
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Career;
