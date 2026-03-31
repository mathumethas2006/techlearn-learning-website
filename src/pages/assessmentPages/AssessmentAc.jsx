import { useState, useEffect } from "react";
import "../../assessment.css";

function AssessmentAc() {
  const [score, setScore] = useState(0);
  const [welcome, setWelcome] = useState("");

  const questions = [
    ["Compressor function?", ["Compress refrigerant", "Cool air directly", "Release heat", "Filter air"]],
    ["Evaporator absorbs?", ["Room heat", "Voltage", "Sound", "Power"]],
    ["Condenser releases?", ["Heat outside", "Cold air", "Sound", "Voltage"]],
    ["Refrigerant role?", ["Transfers heat", "Stores data", "Controls power", "Produces sound"]],
    ["Thermostat controls?", ["Temperature", "Power supply", "WiFi", "Fan speed"]],
    ["Expansion valve controls?", ["Refrigerant flow", "Voltage", "Sound", "Storage"]],
    ["AC filter removes?", ["Dust particles", "Heat", "Voltage", "Data"]],
    ["Fan helps in?", ["Air circulation", "Storage", "Charging", "Power"]],
    ["PCB controls?", ["Electronic operations", "Cooling directly", "Heat release", "Sound"]],
    ["Remote sensor receives?", ["Remote signals", "Heat", "Power", "Voltage"]],
  ];

  const correctAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  useEffect(() => {
    function getCookie(name) {
      let arr = document.cookie.split(";");
      for (let c of arr) {
        let [k, v] = c.trim().split("=");
        if (k === name) return v;
      }
    }

    const user = getCookie("username") || "User";
    setWelcome(`Welcome ${user}`);
  }, []);

  const handleSubmit = () => {
    let total = 0;

    questions.forEach((_, index) => {
      const selected = document.querySelector(
        `input[name=q${index + 1}]:checked`
      );

      if (selected) {
        if (Number(selected.value) === 1) {
          total += 1;
          selected.parentElement.classList.add("correct");
        } else {
          selected.parentElement.classList.add("wrong");
        }
      }
    });

    setScore(total);
  };

  return (
    <section className="assessment">
      <h1>Air Conditioner Assessment</h1>
      <h3>{welcome}</h3>

      <div className="quiz-box">
        {questions.map((q, index) => (
          <div className="question" key={index}>
            <h3>{index + 1}. {q[0]}</h3>

            {q[1].map((opt, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`q${index + 1}`}
                  value={i === correctAnswers[index] ? 1 : 0}
                />
                {opt}
              </label>
            ))}
          </div>
        ))}

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>

        <h2>Your Score: {score} / 10</h2>
      </div>
    </section>
  );
}

export default AssessmentAc;