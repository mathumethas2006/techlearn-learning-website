import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Index() {

  // ===== STATE =====
  const [word, setWord] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const [visitCount, setVisitCount] = useState(0);

  const [deviceInfo, setDeviceInfo] = useState({
    tv: "",
    mobile: "",
    ac: "",
    lap: ""
  });

  // ===== WORD DATA =====
  const words = [
    { word: "Motherboard", meaning: "The heart of electronic devices" },
    { word: "Processor", meaning: "Executes instructions inside device" },
    { word: "RAM", meaning: "Temporary fast memory storage" },
    { word: "GPU", meaning: "Handles graphics processing" },
    { word: "Sensor", meaning: "Detects environmental changes" }
  ];

  function showRandomWord() {
    let random = Math.floor(Math.random() * words.length);
    setWord(
      "Word of the Day: " +
      words[random].word +
      " – " +
      words[random].meaning
    );
  }

  // ===== DEVICE CLICK =====
  function showDevice(device) {
    if (device === "tv") {
      setDeviceInfo(prev => ({
        ...prev,
        tv: "Learn about display panels, power boards, speakers and signal units."
      }));
    }
    if (device === "mobile") {
      setDeviceInfo(prev => ({
        ...prev,
        mobile: "Understand processors, battery systems, sensors and communication modules."
      }));
    }
    if (device === "ac") {
      setDeviceInfo(prev => ({
        ...prev,
        ac: "Explore compressors, condensers, evaporators and control systems."
      }));
    }
    if (device === "lap") {
      setDeviceInfo(prev => ({
        ...prev,
        lap: "Understand CPU, RAM, storage and motherboard components."
      }));
    }
  }

  // ===== COOKIE FUNCTIONS =====
  function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 86400000);
    document.cookie =
      name + "=" + encodeURIComponent(value) +
      ";expires=" + date.toUTCString() + ";path=/";
  }

  function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (let c of cookies) {
      let [key, value] = c.trim().split("=");
      if (key === name) return value ? decodeURIComponent(value) : null;
    }
    return null;
  }

  // ===== PAGE LOAD =====
  useEffect(() => {
    showRandomWord();

    let visited = getCookie("visited");

    if (visited) {
      setWelcomeMsg("Welcome Back to TechLearn Academy!");
    } else {
      setCookie("visited", "yes", 7);
      setWelcomeMsg("Welcome to TechLearn Academy!");
    }

    let count = getCookie("visitCount");
    count = count ? parseInt(count) + 1 : 1;

    setCookie("visitCount", count, 7);
    setVisitCount(count);
  }, []);

  // ===== UI =====
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <h2 className="logo">TechLearn</h2>

        <nav>
          <Link to="/" className="active">Home</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/register">Register</Link>
          <Link to="/assessment">Assessment</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <h1>Electronic Devices Academy</h1>

          <p>
            Master the inner workings of TVs, Mobile Phones, and modern electronics through interactive learning
          </p>

          <p>{word}</p>
          <p>{welcomeMsg}</p>
          <p>You have visited this website {visitCount} times.</p>

          <button onClick={showRandomWord}>Change Word</button>

          <br /><br />

          <Link to="/learn">
            <button>Start Learning</button>
          </Link>


        </div>
      </section>

      {/* EXPLORE */}
      <section className="explore">
        <h2>Explore Electronic Devices</h2>
        <p>Click a device to discover what you’ll learn</p>

        <div className="explore-cards">

          <div className="explore-card" onClick={() => showDevice("tv")}>
            <h3>📺 Television</h3>
            <p>{deviceInfo.tv}</p>
          </div>

          <div className="explore-card" onClick={() => showDevice("mobile")}>
            <h3>📱 Mobile Phone</h3>
            <p>{deviceInfo.mobile}</p>
          </div>

          <div className="explore-card" onClick={() => showDevice("ac")}>
            <h3>❄️ Air Conditioner</h3>
            <p>{deviceInfo.ac}</p>
          </div>

          <div className="explore-card" onClick={() => showDevice("lap")}>
            <h3>💻 Laptop</h3>
            <p>{deviceInfo.lap}</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © 2026 ElectroLearn. All Rights Reserved.
      </footer>
    </>
  );
}

export default Index;