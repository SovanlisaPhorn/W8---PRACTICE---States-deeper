import React, { useState } from "react";

export default function App() {
  const [scoreInput, setScoreInput] = useState("");

  const score = scoreInput === "" ? 0 : Number(scoreInput);

  const getScoreColor = (value) => {
    if (value < 4) return "#f3bc47";   // លឿង
    if (value < 7) return "#c4dd4a";   // បៃតងភ្លឺ
    return "var(--main-color)";        // បៃតងចម្បង
  };

  const getScoreBarStyle = () => {
    const scoreWidth = `${(score / 10) * 100}%`;
    const scoreColor = getScoreColor(score);

    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      transition: "width 200ms ease, background-color 200ms ease",
    };
  };

  return (
    <div className="score-panel">
      <h1>My Score in React</h1>

      <small>Enter a score (0 to 10): </small>
      <input
        type="number"
        min="0"
        max="10"
        value={scoreInput}
        onChange={(e) => {
          const raw = e.target.value;
          if (raw === "") {
            setScoreInput("");
            return;
          }

          const parsed = Number(raw);
          if (Number.isNaN(parsed)) return;

          const clamped = Math.min(10, Math.max(0, parsed));
          setScoreInput(String(clamped));
        }}
      />

      <div className="score-bar">
        <div className="score-bar-value" style={getScoreBarStyle()}></div>
      </div>
    </div>
  );
}
