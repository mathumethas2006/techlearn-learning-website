import { useState, useEffect } from "react";
import "../../assessment.css";

function AssessmentLaptop() {
  const [score, setScore] = useState(0);
  const [welcome, setWelcome] = useState("");

  const questions = [
    ["Which component performs calculations?", ["CPU", "RAM", "SSD", "Battery"]],
    ["RAM is used for?", ["Temporary storage", "Permanent storage", "Cooling", "Power supply"]],
    ["SSD stores data?", ["Permanently", "Temporarily", "For cooling", "For sound"]],
    ["Cooling fan prevents?", ["Overheating", "Data loss", "Power failure", "Network issues"]],
    ["Motherboard connects?", ["All components", "Only RAM", "Only CPU", "Only battery"]],
    ["GPU is responsible for?", ["Graphics processing", "Charging", "Storage", "Sound"]],
    ["Laptop battery provides?", ["Portable power", "Data storage", "Cooling", "Internet"]],
    ["BIOS is used for?", ["System boot process", "Charging", "Cooling", "Sound output"]],
    ["Keyboard is an example of?", ["Input device", "Output device", "Storage device", "Cooling device"]],
    ["HDMI port is used for?", ["Display output", "Cooling", "Charging", "Storage"]],
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
      <h1>Laptop Assessment</h1>
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

export default AssessmentLaptop;