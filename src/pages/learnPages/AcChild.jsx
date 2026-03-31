import "../../learn.css";
import { useNavigate } from "react-router-dom";

function AcChild() {
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

          <h2>Air Conditioner - Child Level</h2>

          <h3>What is an Air Conditioner?</h3>
          <p>
            An Air Conditioner (AC) is a machine that makes the air cool.
            It helps us feel comfortable during hot summer days.
          </p>

          <h3>Main Parts of an AC</h3>
          <ul>
            <li><b>Compressor</b> – Works like the heart of the AC.</li>
            <li><b>Fan</b> – Blows cool air into the room.</li>
            <li><b>Filter</b> – Cleans dust from air.</li>
            <li><b>Remote</b> – Used to control temperature.</li>
          </ul>

          <h3>How Does AC Work?</h3>
          <p>
            The AC takes warm air from the room.
            It cools the air inside.
            Then it sends cool air back into the room.
          </p>

          <h3>Why Do We Use AC?</h3>
          <ul>
            <li>To feel cool in summer</li>
            <li>To sleep comfortably</li>
            <li>To reduce sweat</li>
            <li>To keep room fresh</li>
          </ul>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default AcChild;