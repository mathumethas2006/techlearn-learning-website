import "../../learn.css";
import { useNavigate } from "react-router-dom";

function AcTeen() {
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

          <h2>Air Conditioner - Teen Level</h2>

          <h3>Introduction</h3>
          <p>
            An Air Conditioner is an electronic device that controls temperature,
            humidity, and air quality inside a room.
            It uses refrigeration technology to remove heat from indoor air.
          </p>

          <h3>Main Components</h3>
          <ul>
            <li><b>Compressor</b> – Compresses refrigerant gas.</li>
            <li><b>Condenser Coil</b> – Releases heat outside.</li>
            <li><b>Evaporator Coil</b> – Absorbs heat from room air.</li>
            <li><b>Refrigerant</b> – Special cooling gas.</li>
            <li><b>Thermostat</b> – Controls temperature automatically.</li>
          </ul>

          <h3>Working Principle</h3>
          <p>
            The AC works using the refrigeration cycle.
            The refrigerant absorbs heat from indoor air in the evaporator coil.
            The compressor increases the pressure of refrigerant.
            The condenser releases heat outside.
            Finally, cool air is blown back into the room.
          </p>

          <h3>Types of AC</h3>
          <ul>
            <li>Window AC</li>
            <li>Split AC</li>
            <li>Inverter AC</li>
            <li>Central AC</li>
          </ul>

          <h3>Advantages</h3>
          <ul>
            <li>Comfortable indoor temperature</li>
            <li>Improved air circulation</li>
            <li>Reduced humidity</li>
            <li>Better sleep quality</li>
          </ul>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default AcTeen;