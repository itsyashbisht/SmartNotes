import axios from "axios";
import { useState, useEffect } from "react";

const KEY = "AIzaSyDkckdZNJmFjmAjLZjikRJUdhu9mjkOrnY";

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      async function getNotes() {
        if (trigger === false) return;

        try {
          setIsLoading(true);
          console.log("loading...");
          setError(null);
          const res = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${KEY}`,
            method: "post",
            signal: controller.signal,
            data: { contents: [{ parts: [{ text: prompt }] }] },
          });
          if (!res.data) throw new Error("No response from the server");
          setResponse(res.data.candidates[0]?.content.parts[0]?.text);
          console.log(res.data.candidates[0].content.parts[0].text);
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      getNotes();
      return function () {
        controller.abort();
      };
    },
    [prompt, trigger]
  );

  function handleTrigger() {
    if (!prompt.trim()) {
      return;
    }
    setTrigger(true);
  }

  return (
    <section className="Section-AINotes container">
      <h2 className="Heading-secondary">
        Generate Smart, Structured Notes Instantly with AI
      </h2>
      <div className="Generate-Notes">
        <p className="Heading-tertiary">AI Notes Generator</p>
        <textarea
          value={response}
          readOnly
          placeholder="How can I assist you today? Smart Notes AI is here to simplify your learning journey!"
        />
        <div className="NotesInput">
          <input
            type="text"
            id="Notes-Search"
            placeholder="e.g., Quantum Computing"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className="Generate-btn" onClick={handleTrigger}>
            <span>
              <ion-icon className="" name="arrow-forward-outline"></ion-icon>
            </span>
          </button>
        </div>
        <div>
          <p>{isLoading}</p>
          <p>{error}</p>
        </div>
      </div>
    </section>
  );
}
