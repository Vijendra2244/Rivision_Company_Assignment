import { useEffect, useState } from "react";
import "./App.css";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGeminiEffectDemo } from "./assets/GeminiEffect";

function App() {
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
    } catch (error) {
      console.error("Error generating content:", error);

      console.log(error);
    }
  }

  return (
    <>
    
      <form onSubmit={run}>
        <input
          onChange={(e) => setInpt(e.target.value)}
          type="text"
          placeholder="Enter your prompt..."
          value={inpt}
        />
        <input type="submit" value="Submit" />
      </form>
      {think ? "Bot is Thinking....." : <p>{res}</p>}
      <GoogleGeminiEffectDemo />
    </>
  );
}

export default App;
