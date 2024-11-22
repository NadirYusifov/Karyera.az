import { Button } from "@mui/material"
import { Link } from "react-router-dom"

function NotFound() {

  // const [response, setResponse] = useState(null);
  // const [content, setContent] = useState("");
  // const [loading, setLoading] = useState(false);

  // // Input değiştiğinde state güncellenmesi için kullanılır
  // const handleInputChange = (e: { target: { value: SetStateAction<string>}}) => {
  //   setContent(e.target.value);
  // };

  // // Butona tıklanınca loading durumu başlatılır
  // const handleButtonClick = () => {
  //   if (content.trim()) {
  //     setLoading(true); // Loading durumunu true yapıyoruz
  //   }
  // };

  // // useEffect, sadece content değiştiğinde çalışır
  // useEffect(() => {
  //   if (!content.trim() || loading) return; // Eğer input boşsa veya zaten loading durumundaysa, işlem yapma

  //   const fetchChatGPTResponse = async () => {
  //     const apiKey = import.meta.env.VITE_PUBLIC_REACT_AI_API_KEY; // API anahtarını alıyoruz
  //     const url = "https://api.openai.com/v1/chat/completions"; // API URL'si

  //     const headers = {
  //       "Authorization": `Bearer ${apiKey}`, // Authorization header
  //       "Content-Type": "application/json", // JSON formatında veri gönderiyoruz
  //     };

  //     const body = JSON.stringify({
  //       model: "gpt-4", // Kullanılacak model
  //       messages: [{ role: "user", content: content }], // Mesaj formatı
  //       max_tokens: 100, // Yanıtın uzunluğu
  //     });

  //     try {
  //       // API'ye POST isteği gönderiyoruz
  //       const apiResponse = await fetch(url, { method: "POST", headers, body });
  //       const data = await apiResponse.json(); // Gelen yanıtı JSON formatında alıyoruz

  //       if (data.choices && data.choices.length > 0) {
  //         setResponse(data.choices[0]?.message?.content.trim()); // API yanıtını state'e kaydediyoruz
  //       } else {
  //         setResponse("API'den geçerli bir yanıt alınamadı.");
  //       }
  //     } catch (error) {
  //       console.error("Hata:", error); // Eğer hata olursa konsola yazdırıyoruz
  //       setResponse("API çağrısında hata oluştu.");
  //     }

  //     setLoading(false); // Loading durumu false yapılıyor
  //   };

  //   fetchChatGPTResponse(); // API çağrısını başlatıyoruz
  // }, []);

  return (
    <>
<section className="not-found-section">
                <div className="not-found-wrapper my-10">
                    <div className="container flex flex-col justify-center items-center text-center">
                        <div className="not-found-header mb-5">
                            <h1 className="text-very-dark-blue text-[150px] font-semibold tracking-wider">404</h1>
                            <h3 className="text-[30px] font-medium">Bu səhifədə istədiyin məlumat yoxdur.</h3>
                        </div>
                        <div className="not-found-content text-[20px] font-medium text-very-dark-gray">
                            <p>Axtarmaq istədiyin burada yoxdur, yenidən cəhd et.</p>
                            <Link to="/">
                                <Button
                                    className="!font-jakarta !px-4 !py-1.5 !my-5"
                                    sx={{
                                        fontSize: "18px",
                                        background: "#194c6f",
                                        color: "white",
                                        borderRadius: "10px",
                                        textTransform: "capitalize"
                                    }}>
                                    Əsas səhifəyə geri dön
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default NotFound