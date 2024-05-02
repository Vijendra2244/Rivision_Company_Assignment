import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaArrowUp } from "react-icons/fa";
import styles from "./Home.module.css";
import logo_gemini from "../../assets/images/google-gemini-icon.png";
import { AiOutlineUser } from "react-icons/ai";
import { Avatar } from "@chakra-ui/react";

function Home() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");
  const [thinking, setThinking] = useState(false);
  const [title, setTitle] = useState("");
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
      let responseArray = responseBody.split("**");
      let newArray;
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newArray += responseArray[i];
        } else {
          newArray += "<b>" + responseArray[i] + "</b>";
        }
      }
      let newResponse = newArray.split("*").join("</br>");
      let newResponseArray = newResponse.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        if (newResponseArray[0].startsWith("undefined")) {
          newResponseArray[0] = newResponseArray[0].slice(9);
        }
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord + " ");
      }
      console.log(newResponseArray);
      setInputText("");
    } catch (error) {
      console.error("Error generating content:", error);
      setResponse("Error occurred while generating response.");
    } finally {
      setThinking(false);
    }
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
    setTitle(inputText);
  };

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResponse((prev) => prev + nextWord);
    }, 75 * index);
  };

  return (
    <>
      <form className={styles.formField} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          onChange={handleChange}
          type="text"
          placeholder="Enter your question here..."
          value={inputText}
        />
        <button className={styles.button} type="submit" disabled={!inputText}>
          <FaArrowUp />
        </button>
      </form>

      <p className={styles.result}>
        <div className={styles.result_title}>
          <img src={logo_gemini} alt="" />
          <p>{title}</p>
        </div>
        <div className={styles.result_content}>
          <img src={logo_gemini} alt="" />
          {thinking ? (
            <div className={styles.loader}>
              <hr />
              <hr />
              <hr />
            </div>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: response }}></p>
          )}
        </div>
      </p>
    </>
  );
}

export default Home;
