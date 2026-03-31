import { useState, useEffect } from "react";
import "../../assessment.css";

function AssessmentMobile() {
  const [score, setScore] = useState(0);
  const [welcome, setWelcome] = useState("");

  const questions = [
    ["Which component controls all operations?", ["Battery", "Processor (SoC)", "Speaker", "Camera"]],
    ["Which component supplies power?", ["Battery", "RAM", "Display", "SIM"]],
    ["RAM is used for?", ["Permanent storage", "Temporary storage", "Cooling", "Charging"]],
    ["Internal storage stores?", ["Data permanently", "Heat", "Power", "Sound"]],
    ["Touchscreen detects?", ["Touch input", "Sound", "Voltage", "Signals"]],
    ["SIM card provides?", ["Network connection", "Cooling", "Charging", "Storage"]],
    ["Camera captures?", ["Images & video", "Heat", "Power", "Voltage"]],
    ["Antenna helps in?", ["Signal transmission", "Cooling", "Storage", "Power"]],
    ["Microphone converts?", ["Sound to electrical signals", "Heat", "Power", "Data"]],
    ["Charging IC manages?", ["Charging process", "Display", "Camera", "Speaker"]],
  ];

  const correctAnswers = [1, 0, 1, 0, 0, 0, 0, 0, 0, 0];

  useEffect(() => {
    function getCookie(name) {
      let arr = document.cookie.split(";");
      for (let c of arr) {
        let [key, val] = c.trim().split("=");
        if (key === name) return val;
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
      <h1>Mobile Phone Assessment</h1>
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

export default AssessmentMobile;