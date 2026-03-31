import "../../learn.css";
import { useNavigate } from "react-router-dom";

function TvChild() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h2 className="logo">Tech Learning</h2>
      </div>

      {/* Main Learning Section */}
      <div className="learning">
        <div className="content-page">

          <h2>Introduction to Television</h2>

          <p>
            A television (TV) is an electronic device that shows moving pictures and produces sound.
            It is used for watching cartoons, movies, news, sports, and educational programs.
          </p>

          <h3>Why Do We Use a TV?</h3>
          <ul>
            <li>To learn new things</li>
            <li>To watch entertainment shows</li>
            <li>To see live sports matches</li>
            <li>To get news updates</li>
          </ul>

          <h3>Main External Parts of a TV</h3>
          <ul>
            <li><b>Screen</b> – Displays pictures and videos.</li>
            <li><b>Speakers</b> – Produce sound.</li>
            <li><b>Remote Control</b> – Used to change channels and adjust volume.</li>
            <li><b>Power Button</b> – Turns the TV ON and OFF.</li>
          </ul>

          <h3>What Happens Inside the TV?</h3>
          <p>
            Inside the TV, there are small electronic parts.
            When electricity flows into the TV:
          </p>

          <ul>
            <li>The TV receives signals from cable or internet.</li>
            <li>The signals are changed into pictures.</li>
            <li>The sound signals are sent to speakers.</li>
            <li>The screen lights up and shows images.</li>
          </ul>

          <h3>Types of TVs</h3>
          <ul>
            <li>LED TV</li>
            <li>LCD TV</li>
            <li>Smart TV</li>
          </ul>

          <h3>Smart TV Features</h3>
          <ul>
            <li>Connects to WiFi</li>
            <li>Can open YouTube</li>
            <li>Can stream Netflix</li>
            <li>Screen mirroring from mobile</li>
          </ul>

          <h3>Safety Tips</h3>
          <ul>
            <li>Do not touch TV with wet hands.</li>
            <li>Do not sit too close to the screen.</li>
            <li>Switch off when not in use.</li>
          </ul>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default TvChild;