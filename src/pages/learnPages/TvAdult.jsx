import "../../learn.css";
import { useNavigate } from "react-router-dom";

function TvAdult() {
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

          <h2>Television System Architecture</h2>

          <p>
            A modern television is a complex electronic system that integrates power regulation,
            signal processing, display control, and audio output. It receives analog or digital signals
            and converts them into synchronized audio-visual output.
          </p>

          <h3>1. Power Supply Section (SMPS)</h3>
          <p>
            The Switched Mode Power Supply (SMPS) converts 230V AC input into multiple regulated
            DC voltages such as 12V, 5V, and 3.3V required by internal circuits.
          </p>

          <ul>
            <li>Rectifier converts AC to DC.</li>
            <li>Filter capacitors smooth the signal.</li>
            <li>Transformer steps voltage levels up or down.</li>
            <li>Voltage regulators stabilize output.</li>
          </ul>

          <p>
            SMPS is highly efficient and reduces heat compared to linear power supplies.
          </p>

          <h3>2. Signal Reception & Processing</h3>
          <p>Televisions accept signals through:</p>

          <ul>
            <li>RF (Antenna/Cable)</li>
            <li>HDMI (Digital Input)</li>
            <li>USB</li>
            <li>Ethernet/WiFi (Smart TV)</li>
          </ul>

          <p>
            The incoming signals are processed by a System on Chip (SoC). The SoC contains:
          </p>

          <ul>
            <li>CPU – Controls operations</li>
            <li>GPU – Renders graphics</li>
            <li>Video Decoder – Decodes MPEG, H.264, HEVC formats</li>
            <li>Memory Controller – Manages RAM access</li>
          </ul>

          <h3>3. Display Control System</h3>
          <p>
            The display panel consists of millions of pixels arranged in rows and columns.
            Each pixel is controlled by electrical signals.
          </p>

          <p>The T-Con (Timing Controller) board:</p>

          <ul>
            <li>Receives LVDS signals from mainboard</li>
            <li>Controls refresh rate</li>
            <li>Synchronizes horizontal and vertical scanning</li>
            <li>Manages pixel brightness</li>
          </ul>

          <h3>4. Display Technologies</h3>

          <ul>
            <li><b>LCD:</b> Uses liquid crystals with backlight.</li>
            <li><b>LED:</b> LCD panel with LED backlighting.</li>
            <li><b>OLED:</b> Each pixel emits its own light, no backlight required.</li>
            <li><b>QLED:</b> Uses quantum dots for improved brightness and color.</li>
          </ul>

          <h3>5. Audio Processing System</h3>
          <p>Digital audio signals are processed through:</p>

          <ul>
            <li>DAC (Digital-to-Analog Converter)</li>
            <li>Audio Amplifier Circuit</li>
            <li>Speaker Drivers</li>
          </ul>

          <p>
            Advanced TVs support Dolby Audio and surround sound processing.
          </p>

          <h3>6. Smart TV Operating System</h3>
          <p>
            Modern televisions operate using embedded operating systems such as:
          </p>

          <ul>
            <li>Android TV</li>
            <li>WebOS</li>
            <li>Tizen OS</li>
          </ul>

          <p>The OS manages:</p>

          <ul>
            <li>Application execution</li>
            <li>Internet connectivity</li>
            <li>Memory allocation</li>
            <li>User interface rendering</li>
          </ul>

          <h3>7. Data Flow Inside the TV</h3>
          <p>The complete data flow process:</p>

          <ul>
            <li>Input signal received</li>
            <li>Signal decoded by SoC</li>
            <li>Video processed and sent to T-Con</li>
            <li>Audio processed and sent to amplifier</li>
            <li>Display and sound output generated</li>
          </ul>

          <h3>8. Modern Advancements</h3>

          <ul>
            <li>4K and 8K ultra-high resolution</li>
            <li>AI-based image upscaling</li>
            <li>Mini-LED backlighting</li>
            <li>Voice assistant integration</li>
            <li>HDR (High Dynamic Range) support</li>
          </ul>

          <p>
            Television technology continues to evolve with improvements in display efficiency,
            processing speed, and intelligent content enhancement.
          </p>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default TvAdult;