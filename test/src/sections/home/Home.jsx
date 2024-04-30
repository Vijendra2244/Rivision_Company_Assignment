import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaArrowUp } from "react-icons/fa";
import styles from "./Home.module.css";
import Sidebar from "../sidebar/Sidebar";
import Typewriter from "typewriter-effect";

function Home() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");
  const [thinking, setThinking] = useState(false);
  const api = import.meta.env.VITE_GEMINIT_API_KEY;
  const genAI = new GoogleGenerativeAI(api);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = inputText;

    try {
      setThinking(true);
      const result = await model.generateContent(prompt);
      const responseBody = await result.response.text();
      console.log(responseBody);
      setResponse(responseBody);
      setInputText("");
    } catch (error) {
      console.error("Error generating content:", error);
      setResponse("Error occurred while generating response.");
    } finally {
      setThinking(false);
    }
  };

  return (
    <>
      <form className={styles.formField} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          placeholder="Enter your question here..."
          value={inputText}
        />
        <button className={styles.button} type="submit">
          <FaArrowUp />
        </button>
      </form>

      <div className={styles.response}>
        {thinking ? (
          <p>Bot is Thinking.....</p>
        ) : (
          <>
          
            <p className={styles.result}>
              <p className={styles.type}> 
              <Typewriter
                
                options={{
                  strings: [response],
                  autoStart: true,
                  loop: false,
                  typeSpeed: 100000,
                }}
                />
                </p>
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
