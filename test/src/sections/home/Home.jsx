import React from "react";
import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import styles from "./Home.module.css";
import { FaArrowUp } from "react-icons/fa";

function Home() {
  const [res, setRes] = useState("");
  const [inpt, setInpt] = useState("");
  const [think, setThink] = useState(false);
  let api = import.meta.env.VITE_GEMINIT_API_KEY;
  const genAI = new GoogleGenerativeAI(api);

  async function run(event) {
    event.preventDefault();
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = inpt;

    try {
      setThink(true);
      const result = await model.generateContent(prompt);
      const response = await result.response.text();
      console.log(response);
      setRes(response);
      setThink(false);
      setInpt("");
    } catch (error) {
      console.error("Error generating content:", error);

      console.log(error);
    }
  }
  return (
    <>
      <form className={styles.formField} onSubmit={run}>
        <input
          className={styles.input}
          onChange={(e) => setInpt(e.target.value)}
          type="text"
          placeholder="Enter your prompt here..."
          value={inpt}
        />
        <button className={styles.button} type="submit">
          <FaArrowUp />
        </button>
      </form>
      {think ? "Bot is Thinking....." : <p className={styles.result}>{res}</p>}
    </>
  );
}

export default Home;
