import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnswerImage from "/public/Answer.png";
import CareerResultImg from "/public/CareerResult.png";
import LoadingSpinner from "../../components/Loading/LoadingCareer";



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
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]); // Cevapları tutan dizi
  const [quizEnded, setQuizEnded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<string | null>(null); // Sonuç durumu
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true) // Hata mesajı durumu

  useEffect(() => {
    setLoading(true)
  })
  // Soruyu geri almak
  const handleBackClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
      setProgress(prevProgress => prevProgress - 100 / questions.length);
    }
  };

  const handleChange = () => {
    if (result) {
      result
    } else {
      errorMessage
    }
  }

interface ChatBotStyle  {
 sender: "bot"
}

  // Seçeneği tıklamak
  const handleOptionClick = (opt: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = opt; // Cevabı kaydediyoruz
    setSelectedAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setProgress(prevProgress => prevProgress + 100 / questions.length);
        setSelectedOption(null);
      }, 300);
    } else {
      setQuizEnded(true);
      setProgress(100);
      fetchCareerRecommendation(); // Test bittiğinde API'den sonuç almak için çağırıyoruz
    }
  };

  // ChatGPT API'sine istek göndermek
  const fetchCareerRecommendation = async () => {
    const apiKey = import.meta.env.VITE_PUBLIC_REACT_AI_API_KEY; // API anahtarını alıyoruz
    const url = "https://api.openai.com/v1/chat/completions"; // API URL'si değişti


    if (!apiKey) {
      setErrorMessage("API anahtarı eksik veya geçersiz.");
      return;
    }

    const headers = {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({
      model: "gpt-4", // Modeli GPT-4 olarak ayarlıyoruz
      messages: [
        {
          role: "system",
          content: "Sana sorulara verilen cevablara göre bir kariyer önerisi yapmanı isteyeceğim. Her soruya verilen cevaplar şu şekildedir."
        },
        ...selectedAnswers.map((answer, index) => ({
          role: "user",
          content: `Soru ${index + 1}: ${questions[index].question} - Cevap: ${answer}`
        })),
        {
          role: "user",
          content: "Bu cevaplara dayanarak kullanıcıya uygun bir kariyer önerisi yap."
        }
      ],
      max_tokens: Infinity,
    });

    try {
      const apiResponse = await fetch(url, { method: "POST", headers, body });

      if (!apiResponse.ok) {
        const errorText = await apiResponse.text(); // Detaylı hata mesajını alıyoruz
        throw new Error(`API Error: ${apiResponse.statusText} - ${errorText}`);
      }


      const data = await apiResponse.json(); // Gelen yanıtı JSON formatında alıyoruz

      if (data.choices && data.choices.length > 0) {
        setResult(data.choices[0].message.content.trim()); // API yanıtını result state'ine kaydediyoruz
        setErrorMessage(null); // Hata mesajını sıfırlıyoruz
      } else {
        setResult("API'den geçerli bir yanıt alınamadı.");
        setErrorMessage(null) // Hata mesajını sıfırlıyoruz
      }
    } catch (error: any) {
      console.error("API çağrısında hata:", error);
      setResult(null);
      setErrorMessage(`Bir hata oluştu: ${error.message}`); // Hata mesajını daha ayrıntılı alıyoruz
    }
  };

  return (
    <div className="container_career block lg:flex w-full mb-[130px]">
      <div className="left-section hidden lg:flex items-center lg:bg-very-dark-blue">
        {result ? <img src={CareerResultImg} alt="CareerResult" /> : <img className="w-full px-14" src={AnswerImage} alt="AnswerImg" />}
      </div>
      <div className="right-section w-full h-full md:h-screen px-0 lg:px-10 py-5 flex flex-col flex-wrap justify-center bg-white">
        <div className="container">
          {quizEnded ? (
            <div className="end-message">
              <div className="flex justify-center" onChange={handleChange}>

                {/* <button className="endb bg-very-dark-blue rounded-full py-[10px] px-10 text-white mt-10">
              <h2 className="endm text-very-dark-blue text-[84px] text-center font-semibold">Təbriklər!</h2>
              <p className="endp text-center text-[#2F78AA] text-[32px] leading-[60px]">
                İndi sizə ən uyğun karyera sahələrini təqdim edirik!
              </p>
                </button> */}
                {result ?
                  <div className="block">
                    <div>
                    <h2 className="endm text-very-dark-blue text-[50px] lg:text-[74px] text-center font-semibold">Təbriklər!</h2>
                    <p className="endp text-center text-[#2F78AA] text-[25px] lg:text-[32px] leading-[35px] mb-6">
                      İndi sizə ən uyğun karyera sahələrini təqdim edirik!
                    </p>
                    </div>
                    <div>
                    <p className="text-[18px] lg:text-[20px] leading-[30px] text-justify">{result}</p>
                    </div>
                  </div> :
                  loading &&
                  <div className="text-[20px] space-y-3">
                    <LoadingSpinner />
                    <p>Nəticə Yüklənir...</p>
                  </div>
                }
              </div>
            </div>
          ) : (
            <div className="h-full block lg:flex flex-col justify-center">
              <div className="progress-bar w-full h-5 bg-[#E0E0E0] rounded-full mb-5">
                <div
                  className="progress-bar-fill w-full h-full bg-[#1D4F91] rounded-full transition-all ease-in-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Question header */}
              <div className="question-header">
                <h2 className="text-[23px]">{`${currentQuestion + 1}/${questions.length}`}</h2>
                <p className="text-[23px] lg:text-[32px] my-5 font-medium">
                  {questions[currentQuestion].question}
                </p>
              </div>

              {/* Options */}
              <div className="options flex flex-col">
                {questions[currentQuestion].options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className={`flex items-center w-full h-full rounded-full border-solid border border-very-dark-blue pl-[35px] py-3 mb-[10px] text-[18px] lg:text-[20px] cursor-pointer bg-white text-[#242424] text-left hover:bg-very-dark-blue hover:text-white ${selectedOption === option ? "selected" : ""}`}
                  >
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

              <div className="navigation flex justify-end mt-[10px] mb-0 ">
                {currentQuestion === 0 ? (
                  <Link to='/'><h4>Ana səhifə</h4></Link>
                ) : (
                  <button className="back-btn text-" onClick={handleBackClick}>
                    Geri
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;