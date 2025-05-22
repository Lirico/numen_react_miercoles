import { useState, useEffect } from "react";
import Quote from "./Quote";
import Loader from "./Loader";
import axios from "axios";

const initialQuote = {
  text: "",
  author: "",
};

const BBApp = () => {
  const [quote, setQuote] = useState(initialQuote);
  const [isLoading, setIsLoading] = useState(false)

    // ASYNC AWAIT
  
  const updateQuote = async () => {

    setIsLoading(true)

    // Definimos el endpoint
    const ENDPOINT = "https://api.breakingbadquotes.xyz/v1/quotes";
    // Ejecutamos la peticion
    const response = await axios.get(ENDPOINT)

    const data = await response.data
    // Sabiendo que data es un []
    const [newQuote] = data;
    const {quote: text, author} = newQuote

    setQuote({text,author})

    setTimeout(() => {
        setIsLoading(false)
    }, 1500);
  }

  useEffect(() => {
    updateQuote()
  }, [])
  

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 300 }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1280px-Breaking_Bad_logo.svg.png"
        alt="breaking-bad"
        width="300"
      />
      {
        isLoading && <Loader />
      }
      {
        !isLoading && <Quote quote={quote}/>
      }
      <button onClick={updateQuote}>Obtener otra cita</button>
    </div>
  );
};

export default BBApp;




