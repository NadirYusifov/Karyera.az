import { Button } from "@mui/material"
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function NotFound() {
    // const [response, setResponse] = useState(null);
    // useEffect(() => {
    //   const fetchChatGPTResponse = async () => {
    //     const apiKey = import.meta.env.VITE_CHATGPT_API_KEY; // Çevresel değişkeni alma
    //     const url = "https://api.openai.com/v1/completions";
  
    //     const headers = {
    //       "Authorization": `Bearer ${apiKey}`,
    //       "Content-Type": "application/json"
    //     };
  
    //     const body = JSON.stringify({
    //       model: "gpt-4",  // ChatGPT modelini belirtin
    //       prompt: "Merhaba, dünya!",  // Gönderilecek metin
    //       max_tokens: 100
    //     });
  
    //     try {
    //       const response = await fetch(url, { method: "POST", headers, body });
    //       const data = await response.json();
    //       setResponse(data);
    //     } catch (error) {
    //       console.error("Hata:", error);
    //     }
    //   };
  
    //   fetchChatGPTResponse();
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

    {/* <div>
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p>Yükleniyor...</p>
      )}
    </div> */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound