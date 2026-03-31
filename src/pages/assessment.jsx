import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assessment.css";

function Assessment() {

  const [device, setDevice] = useState("");
  const navigate = useNavigate();

  function goToAssessment() {
    if (device === "") {
      alert("Please select a device!");
      return;
    }

    navigate("/assessment-" + device);
  }

  return (
    <>
      {/* Navbar */}
      <nav>
        <div className="logo">TechLearn</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/register">Register</a>
          <a href="/learn">Learn</a>
          <a href="/assessment" className="active">Assessment</a>
          <a href="/feedback">Feedback</a>
        </div>
      </nav>

      {/* Main Section */}
      <section className="container">

        <h1>Select Device for Assessment</h1>

        <div className="card">

          <select
            value={device}
            onChange={(e) => setDevice(e.target.value)}
          >
            <option value="">Select Device</option>
            <option value="tv">TV</option>
            <option value="mobile">Mobile</option>
            <option value="ac">AC</option>
            <option value="laptop">Laptop</option>
          </select>

          <button onClick={goToAssessment}>
            Start Assessment
          </button>

        </div>

      </section>
    </>
  );
}

export default Assessment;