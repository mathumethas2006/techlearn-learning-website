import { useEffect } from "react";
import "../../assessment.css";

function AssessmentTv() {

  // ===== COOKIE FUNCTION =====
  function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (let c of cookies) {
      let [key, val] = c.trim().split("=");
      if (key === name) return val;
    }
  }

  // ===== WELCOME MESSAGE =====
  useEffect(() => {
    document.getElementById("welcome").textContent =
      "Welcome " + (getCookie("username") || "Student");
  }, []);

  // ===== SUBMIT LOGIC =====
  function handleSubmit() {
    let score = 0;

    for (let i = 1; i <= 10; i++) {
      let options = document.getElementsByName("q" + i);

      for (let opt of options) {
        if (opt.checked) {
          score += Number(opt.value);

          if (opt.value === "1") {
            opt.parentElement.classList.add("correct");
          } else {
            opt.parentElement.classList.add("wrong");
          }
        }
      }
    }

    document.getElementById("result").textContent =
      "Your Score: " + score + " / 10";
  }

  return (
    <section className="assessment">
      <h1>TV Assessment</h1>
      <h3 id="welcome"></h3>

      <div className="quiz-box" id="quiz">

        {/* Q1 */}
        <div className="question">
          <h3>1. Which part shows images?</h3>
          <label><input type="radio" name="q1" value="0" /> Speaker</label>
          <label><input type="radio" name="q1" value="1" /> Display Panel</label>
          <label><input type="radio" name="q1" value="0" /> Power Supply</label>
          <label><input type="radio" name="q1" value="0" /> Remote</label>
        </div>

        {/* Q2 */}
        <div className="question">
          <h3>2. T-Con board controls?</h3>
          <label><input type="radio" name="q2" value="1" /> Image timing</label>
          <label><input type="radio" name="q2" value="0" /> Audio</label>
          <label><input type="radio" name="q2" value="0" /> WiFi</label>
          <label><input type="radio" name="q2" value="0" /> Power</label>
        </div>

        {/* Q3 */}
        <div className="question">
          <h3>3. HDMI port is used for?</h3>
          <label><input type="radio" name="q3" value="1" /> Audio & Video input</label>
          <label><input type="radio" name="q3" value="0" /> Cooling</label>
          <label><input type="radio" name="q3" value="0" /> Power control</label>
          <label><input type="radio" name="q3" value="0" /> Storage</label>
        </div>

        {/* Q4 */}
        <div className="question">
          <h3>4. Which board controls all TV functions?</h3>
          <label><input type="radio" name="q4" value="0" /> Speaker board</label>
          <label><input type="radio" name="q4" value="1" /> Main board</label>
          <label><input type="radio" name="q4" value="0" /> LED strip</label>
          <label><input type="radio" name="q4" value="0" /> Panel</label>
        </div>

        {/* Q5 */}
        <div className="question">
          <h3>5. Backlight is used for?</h3>
          <label><input type="radio" name="q5" value="1" /> Brightness</label>
          <label><input type="radio" name="q5" value="0" /> Sound</label>
          <label><input type="radio" name="q5" value="0" /> Internet</label>
          <label><input type="radio" name="q5" value="0" /> Power supply</label>
        </div>

        {/* Q6 */}
        <div className="question">
          <h3>6. Remote communicates using?</h3>
          <label><input type="radio" name="q6" value="1" /> Infrared</label>
          <label><input type="radio" name="q6" value="0" /> HDMI</label>
          <label><input type="radio" name="q6" value="0" /> USB</label>
          <label><input type="radio" name="q6" value="0" /> Bluetooth cable</label>
        </div>

        {/* Q7 */}
        <div className="question">
          <h3>7. Power supply board converts?</h3>
          <label><input type="radio" name="q7" value="1" /> AC to DC</label>
          <label><input type="radio" name="q7" value="0" /> DC to AC</label>
          <label><input type="radio" name="q7" value="0" /> Sound to video</label>
          <label><input type="radio" name="q7" value="0" /> Data to signal</label>
        </div>

        {/* Q8 */}
        <div className="question">
          <h3>8. Smart TV connects to internet using?</h3>
          <label><input type="radio" name="q8" value="1" /> WiFi</label>
          <label><input type="radio" name="q8" value="0" /> VGA</label>
          <label><input type="radio" name="q8" value="0" /> AV cable</label>
          <label><input type="radio" name="q8" value="0" /> Speaker</label>
        </div>

        {/* Q9 */}
        <div className="question">
          <h3>9. Resolution refers to?</h3>
          <label><input type="radio" name="q9" value="1" /> Image clarity</label>
          <label><input type="radio" name="q9" value="0" /> Volume level</label>
          <label><input type="radio" name="q9" value="0" /> Power usage</label>
          <label><input type="radio" name="q9" value="0" /> Remote battery</label>
        </div>

        {/* Q10 */}
        <div className="question">
          <h3>10. LED TV stands for?</h3>
          <label><input type="radio" name="q10" value="1" /> Light Emitting Diode</label>
          <label><input type="radio" name="q10" value="0" /> Low Energy Device</label>
          <label><input type="radio" name="q10" value="0" /> Light Energy Display</label>
          <label><input type="radio" name="q10" value="0" /> Large Electronic Device</label>
        </div>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>

        <h2 id="result"></h2>

      </div>
    </section>
  );
}

export default AssessmentTv;