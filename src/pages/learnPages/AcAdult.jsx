import "../../learn.css";
import { useNavigate } from "react-router-dom";

function AcAdult() {
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

          <h2>Air Conditioner System Architecture</h2>

          <h3>1. Power Supply Section</h3>
          <p>
            The AC operates on 230V AC supply.
            The internal SMPS converts AC to regulated DC voltage
            required for microcontroller, sensors and display panel.
          </p>

          <h3>2. Refrigeration Cycle</h3>
          <p>
            The refrigeration cycle consists of four main stages:
            Compression, Condensation, Expansion, and Evaporation.
            The refrigerant absorbs heat from indoor air and releases it outside.
          </p>

          <h3>3. Compressor Unit</h3>
          <p>
            The compressor increases refrigerant pressure and temperature.
            Modern inverter ACs use variable speed compressors
            to improve energy efficiency.
          </p>

          <h3>4. Heat Exchange System</h3>
          <p>
            The evaporator coil absorbs room heat.
            The condenser coil releases absorbed heat outdoors.
            Copper tubing improves thermal conductivity.
          </p>

          <h3>5. Electronic Control System</h3>
          <ul>
            <li>Temperature sensors monitor room temperature.</li>
            <li>Microcontroller manages compressor speed.</li>
            <li>Relay circuits control fan and motor.</li>
            <li>Digital display shows settings.</li>
          </ul>

          <h3>6. Energy Efficiency</h3>
          <ul>
            <li>Inverter technology reduces power consumption.</li>
            <li>Star rating indicates efficiency.</li>
            <li>Eco mode optimizes cooling load.</li>
            <li>Sleep mode adjusts temperature automatically.</li>
          </ul>

          <h3>7. Modern Features</h3>
          <ul>
            <li>Wi-Fi enabled smart control</li>
            <li>AI-based temperature adjustment</li>
            <li>Air purification filters</li>
            <li>Auto restart function</li>
          </ul>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default AcAdult;