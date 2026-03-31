import "../../learn.css";
import { useNavigate } from "react-router-dom";

function TvTeen() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h2 className="logo">Tech Learning</h2>
      </div>

      {/* Main Content */}
      <div className="learning">
        <div className="content-page">

          <h2>Television – Technical Overview</h2>

          <p>
            A television is an electronic device that receives broadcast or digital signals
            and converts them into video and audio output.
          </p>

          <h3>Main Internal Components</h3>
          <ul>
            <li>Power Supply Unit (PSU)</li>
            <li>Mainboard (Motherboard)</li>
            <li>Tuner</li>
            <li>Display Panel</li>
            <li>Audio Amplifier</li>
            <li>Speakers</li>
          </ul>

          <h3>Working Process</h3>
          <ul>
            <li>Signal is received through cable, antenna, HDMI, or internet.</li>
            <li>Tuner processes incoming signal.</li>
            <li>Mainboard decodes video and audio.</li>
            <li>Display panel shows images using pixels.</li>
            <li>Audio circuit sends sound to speakers.</li>
          </ul>

          <h3>Display Technologies</h3>
          <ul>
            <li>LCD – Liquid crystal display.</li>
            <li>LED – LCD with LED backlight.</li>
            <li>OLED – Self-lighting pixels.</li>
          </ul>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default TvTeen;