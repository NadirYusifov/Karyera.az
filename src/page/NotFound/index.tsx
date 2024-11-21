// import { Button } from "@mui/material"
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom"

function NotFound() {

  const [response, setResponse] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // Input değiştiğinde state güncellenmesi için kullanılır
  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  // Butona tıklanınca loading durumu başlatılır
  const handleButtonClick = () => {
    if (content.trim()) {
      setLoading(true); // Loading durumunu true yapıyoruz
    }
  };

  // useEffect, sadece content değiştiğinde çalışır
  useEffect(() => {
    if (!content.trim() || loading) return; // Eğer input boşsa veya zaten loading durumundaysa, işlem yapma

    const fetchChatGPTResponse = async () => {
      const apiKey = import.meta.env.VITE_PUBLIC_REACT_AI_API_KEY; // API anahtarını alıyoruz
      const url = "https://api.openai.com/v1/chat/completions"; // API URL'si

      const headers = {
        "Authorization": `Bearer ${apiKey}`, // Authorization header
        "Content-Type": "application/json", // JSON formatında veri gönderiyoruz
      };

      const body = JSON.stringify({
        model: "gpt-4", // Kullanılacak model
        messages: [{ role: "user", content: content }], // Mesaj formatı
        max_tokens: 100, // Yanıtın uzunluğu
      });

      try {
        // API'ye POST isteği gönderiyoruz
        const apiResponse = await fetch(url, { method: "POST", headers, body });
        const data = await apiResponse.json(); // Gelen yanıtı JSON formatında alıyoruz

        if (data.choices && data.choices.length > 0) {
          setResponse(data.choices[0]?.message?.content.trim()); // API yanıtını state'e kaydediyoruz
        } else {
          setResponse("API'den geçerli bir yanıt alınamadı.");
        }
      } catch (error) {
        console.error("Hata:", error); // Eğer hata olursa konsola yazdırıyoruz
        setResponse("API çağrısında hata oluştu.");
      }

      setLoading(false); // Loading durumu false yapılıyor
    };

    fetchChatGPTResponse(); // API çağrısını başlatıyoruz
  }, [content, loading]);

  return (
    <>


      <div className="w-full h-screen flex flex-col justify-center items-center">
        <>
          {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}

          <form>
            <input
              type="text"
              className="border border-1 border-zinc-600 rounded-md px-3 py-1"
              onChange={handleInputChange}
              value={content}
              name="contentValue"
              placeholder="Soru sor"
            />
            <button className="bg-sky-600 py-1 px-3 text-white mx-3 rounded-md" type="button" onClick={handleButtonClick} disabled={loading}>{loading ? "Yukleniyor..." : "Gonder"}</button>
          </form>

        </>
        {response && (
          <p className="mt-5">{response}</p>
        )}
      </div>


    </>
  )
}

export default NotFound