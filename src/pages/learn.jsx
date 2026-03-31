import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../learn.css";

function Learn() {

  const [age, setAge] = useState("");
  const [device, setDevice] = useState("");

  const navigate = useNavigate();

  function handleStart() {

    if (age < 7) {
      alert("Content available for age 7 and above");
      return;
    }

    if (device === "") {
      alert("Please select a device");
      return;
    }

    let ageGroup = "";

    if (age >= 7 && age <= 12) ageGroup = "child";
    else if (age >= 13 && age <= 19) ageGroup = "teen";
    else ageGroup = "adult";

    navigate(`/${device}-${ageGroup}`);
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <h2 className="logo">TechLearn</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/learn" className="active">Learn</Link>

          {/* ✅ NEW LINKS */}
          <Link to="/assessment">Assessment</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>
      </header>

      {/* MAIN SECTION */}
      <section className="learning">
        <h1>Select Your Learning Level</h1>

        <div className="selection-box">

          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <select
            value={device}
            onChange={(e) => setDevice(e.target.value)}
          >
            <option value="">Select Device</option>
            <option value="tv">Television</option>
            <option value="mobile">Mobile Phone</option>
            <option value="ac">Air Conditioner</option>
            <option value="laptop">Laptop</option>
          </select>

          <br />

          <button onClick={handleStart}>Start Learning</button>

        </div>
      </section>
    </>
  );
}

export default Learn;