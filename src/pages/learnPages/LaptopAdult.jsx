import "../../learn.css";
import { useNavigate } from "react-router-dom";

function LaptopAdult() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <h2 className="logo">Tech Learning</h2>
      </div>

      <div className="learning">
        <div className="content-page">

          <h2>Laptop - Adult Level</h2>

          <h3>Introduction</h3>
          <p>
            A laptop is a portable personal computer that integrates a display,
            keyboard, processor, memory, and storage into a single compact device.
          </p>

          <h3>Main Hardware Components</h3>
          <ul>
            <li><b>CPU (Central Processing Unit)</b> – Executes instructions.</li>
            <li><b>RAM</b> – Temporary memory for running programs.</li>
            <li><b>Storage (HDD/SSD)</b> – Stores files and software.</li>
            <li><b>GPU</b> – Handles graphics and video processing.</li>
            <li><b>Motherboard</b> – Connects all components.</li>
          </ul>

          <h3>Working Principle</h3>
          <p>
            When powered on, the BIOS initializes hardware. The operating system
            loads into RAM. The CPU processes instructions and interacts with
            memory to perform tasks like browsing, coding, or gaming.
          </p>

          <h3>Software Components</h3>
          <ul>
            <li>Operating System (Windows/Linux/macOS)</li>
            <li>Application Software</li>
            <li>Device Drivers</li>
            <li>Utility Programs</li>
          </ul>

          <h3>Applications of Laptops</h3>
          <ul>
            <li>Programming and development</li>
            <li>Graphic designing</li>
            <li>Online learning</li>
            <li>Business operations</li>
          </ul>

          <br /><br />

          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default LaptopAdult;