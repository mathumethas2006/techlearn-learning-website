import "../../learn.css";
import { useNavigate } from "react-router-dom";

function MobileTeen() {
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

          <h2>Smartphone Internal Structure</h2>

          <p>
            A smartphone is a compact computing device that integrates communication,
            processing, storage, and multimedia functions into a single system.
          </p>

          <h3>Main Internal Components</h3>
          <ul>
            <li><b>Processor (CPU)</b> – Executes instructions.</li>
            <li><b>RAM</b> – Temporarily stores running app data.</li>
            <li><b>Internal Storage</b> – Stores apps and files.</li>
            <li><b>Battery</b> – Provides power supply.</li>
            <li><b>Motherboard</b> – Connects all components.</li>
            <li><b>Camera Module</b> – Captures images.</li>
            <li><b>SIM Slot</b> – Connects to mobile network.</li>
          </ul>

          <h3>Working Process</h3>
          <ul>
            <li>The battery supplies power.</li>
            <li>The processor runs the operating system.</li>
            <li>Apps request memory from RAM.</li>
            <li>Data is stored in internal storage.</li>
            <li>Network signals are handled through SIM and antenna.</li>
          </ul>

          <h3>Operating System</h3>
          <ul>
            <li>Android</li>
            <li>iOS</li>
          </ul>

          <p>
            The operating system manages hardware, apps, memory, and security.
          </p>

          <h3>Network Communication</h3>
          <p>
            Smartphones connect using 4G/5G mobile networks and WiFi.
            Signals are transmitted as radio waves between phone and tower.
          </p>

          <h3>Common Features</h3>
          <ul>
            <li>Fingerprint sensor</li>
            <li>Face unlock</li>
            <li>Bluetooth</li>
            <li>GPS</li>
          </ul>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default MobileTeen;