import { useState } from "react";
import { Link } from "react-router-dom";
import "../feedback.css";

function Feedback() {

  // ===== STATE =====
  const [fb, setFb] = useState({
    name: "",
    course: "",
    text: "",
    recommend: ""
  });

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [fbMsg, setFbMsg] = useState("");
  const [contactMsg, setContactMsg] = useState("");

  // ===== REGEX =====
  const nameRegex = /^[A-Za-z ]{3,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ===== COOKIE =====
  function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
  }

  // ===== FEEDBACK SUBMIT =====
  function handleFeedback() {

    if (!nameRegex.test(fb.name)) {
      setFbMsg("Enter valid name (3+ letters)");
      return;
    }

    if (fb.course === "") {
      setFbMsg("Select course");
      return;
    }

    if (fb.text.length < 10) {
      setFbMsg("Feedback must be at least 10 characters");
      return;
    }

    if (fb.recommend === "") {
      setFbMsg("Select recommendation");
      return;
    }

    setCookie("feedbackUser", fb.name);

    setFbMsg("✅ Thank you for your feedback!");
  }

  // ===== CONTACT SUBMIT =====
  function handleContact() {

    if (!nameRegex.test(contact.name)) {
      setContactMsg("Enter valid name");
      return;
    }

    if (!emailRegex.test(contact.email)) {
      setContactMsg("Enter valid email");
      return;
    }

    if (contact.subject === "") {
      setContactMsg("Select subject");
      return;
    }

    if (contact.message.length < 10) {
      setContactMsg("Message must be at least 10 characters");
      return;
    }

    setCookie("contactUser", contact.name);

    setContactMsg("✅ Message sent successfully!");
  }

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <h2 className="logo">TechLearn</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/assessment">Assessment</Link>
          <Link to="/feedback" className="active">Feedback</Link>
        </nav>
      </header>

      {/* ===== MAIN ===== */}
      <section className="feedback">
        <h1>Feedback & Contact</h1>

        <div className="feedback-container">

          {/* ===== FEEDBACK ===== */}
          <div className="card">
            <h2>Course Feedback</h2>

            <label>Your Name</label>
            <input
              type="text"
              value={fb.name}
              onChange={(e) => setFb({ ...fb, name: e.target.value })}
            />

            <label>Course</label>
            <select
              value={fb.course}
              onChange={(e) => setFb({ ...fb, course: e.target.value })}
            >
              <option value="">Select</option>
              <option>Television</option>
              <option>Mobile Phone</option>
              <option>Air Conditioner</option>
              <option>Laptop</option>
            </select>

            <label>Feedback</label>
            <textarea
              value={fb.text}
              onChange={(e) => setFb({ ...fb, text: e.target.value })}
            />

            <label>Recommend?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="rec" onChange={() => setFb({ ...fb, recommend: "Yes" })} /> Yes
              </label>
              <label>
                <input type="radio" name="rec" onChange={() => setFb({ ...fb, recommend: "Maybe" })} /> Maybe
              </label>
              <label>
                <input type="radio" name="rec" onChange={() => setFb({ ...fb, recommend: "No" })} /> No
              </label>
            </div>

            <button onClick={handleFeedback}>Submit Feedback</button>

            <p className={fbMsg.includes("✅") ? "success" : "error"}>
              {fbMsg}
            </p>
          </div>

          {/* ===== CONTACT ===== */}
          <div className="card">
            <h2>Contact Us</h2>

            <label>Name</label>
            <input
              type="text"
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />

            <label>Email</label>
            <input
              type="text"
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />

            <label>Subject</label>
            <select
              value={contact.subject}
              onChange={(e) => setContact({ ...contact, subject: e.target.value })}
            >
              <option value="">Select</option>
              <option>General Query</option>
              <option>Course Issue</option>
              <option>Technical Support</option>
            </select>

            <label>Message</label>
            <textarea
              value={contact.message}
              onChange={(e) => setContact({ ...contact, message: e.target.value })}
            />

            <button className="secondary" onClick={handleContact}>
              Send Message
            </button>

            <p className={contactMsg.includes("✅") ? "success" : "error"}>
              {contactMsg}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Feedback;