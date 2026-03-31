import "../../learn.css";
import { useNavigate } from "react-router-dom";

function MobileAdult() {
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

          <h2>Smartphone Architecture and Working</h2>

          <p>
            A smartphone is built around an integrated architecture that combines computing,
            communication, multimedia, and power management subsystems.
          </p>

          <h3>1. System on Chip (SoC)</h3>
          <p>The SoC integrates multiple components:</p>
          <ul>
            <li>CPU – Central processing</li>
            <li>GPU – Graphics rendering</li>
            <li>AI Engine – Machine learning tasks</li>
            <li>Modem – Cellular communication</li>
            <li>Image Signal Processor (ISP)</li>
          </ul>

          <h3>2. Power Management IC (PMIC)</h3>
          <p>
            The PMIC regulates voltage levels and distributes power efficiently
            to different components such as processor, display, and radio modules.
          </p>

          <h3>3. Memory Architecture</h3>
          <ul>
            <li>RAM – Temporary memory (LPDDR type)</li>
            <li>Flash Storage – Permanent storage (UFS/eMMC)</li>
            <li>Cache Memory – High-speed processor memory</li>
          </ul>

          <h3>4. Communication Subsystem</h3>
          <ul>
            <li>Baseband Processor – Handles cellular signals</li>
            <li>RF Transceiver – Converts digital to radio signals</li>
            <li>Antenna System – Transmits and receives signals</li>
            <li>WiFi & Bluetooth Modules</li>
          </ul>

          <h3>5. Display and Graphics</h3>
          <p>
            Modern smartphones use AMOLED or IPS LCD panels.
            The display driver IC controls pixel activation and refresh rate.
          </p>

          <h3>6. Security Mechanisms</h3>
          <ul>
            <li>Secure Boot</li>
            <li>Hardware Encryption</li>
            <li>Biometric Authentication</li>
            <li>Trusted Execution Environment (TEE)</li>
          </ul>

          <h3>7. Data Flow Inside Smartphone</h3>
          <ul>
            <li>User input received via touchscreen</li>
            <li>Processor executes command</li>
            <li>Memory accessed</li>
            <li>Display updated</li>
            <li>Output generated</li>
          </ul>

          <h3>Modern Advancements</h3>
          <ul>
            <li>5G connectivity</li>
            <li>AI-powered photography</li>
            <li>Fast charging technology</li>
            <li>Foldable display systems</li>
          </ul>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default MobileAdult;