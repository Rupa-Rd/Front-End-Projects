import React, { useState } from "react";
import "./CharacterCounter.css";

function CharacterCounter() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const characterCount = text.length;

  const wordCount = text.trim() === ""
    ? 0
    : text.trim().split(/\s+/).length;

  return (
    <div className="container">
      <div className="input">
        <textarea
          id="input"
          placeholder="Enter a text"
          value={text}
          onChange={handleChange}
        />
      </div>
      <div className="result">
        <div className="character-count">
          <span id="characterCount">{characterCount} </span>
          <span>Characters</span>
        </div>
        <div className="word-count">
          <span id="wordCount">{wordCount} </span>
          <span>Words</span>
        </div>
      </div>
    </div>
  );
}

export default CharacterCounter;
