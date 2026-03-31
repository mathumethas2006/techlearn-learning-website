import "../../learn.css";
import { useNavigate } from "react-router-dom";

function MobileChild() {
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

          <h2>What is a Mobile Phone?</h2>

          <p>
            A mobile phone is a small electronic device that helps us talk to people, send messages,
            play games, take photos, and watch videos. It is also called a smartphone.
          </p>

          <h3>Why Do We Use Mobile Phones?</h3>
          <ul>
            <li>To call our friends and family</li>
            <li>To send text messages</li>
            <li>To take pictures and videos</li>
            <li>To study using learning apps</li>
            <li>To watch cartoons and songs</li>
          </ul>

          <h3>Main Parts of a Mobile Phone</h3>
          <ul>
            <li><b>Screen</b> – Shows pictures and apps.</li>
            <li><b>Battery</b> – Gives power to the phone.</li>
            <li><b>Camera</b> – Takes photos and videos.</li>
            <li><b>Speaker</b> – Produces sound.</li>
            <li><b>Microphone</b> – Helps others hear your voice.</li>
            <li><b>Charging Port</b> – Used to charge the battery.</li>
          </ul>

          <h3>How Does a Mobile Work?</h3>
          <ul>
            <li>The battery gives electricity to all parts.</li>
            <li>The phone connects to nearby mobile towers.</li>
            <li>Signals travel from one phone to another.</li>
            <li>The screen shows images and apps.</li>
            <li>The speaker plays sound.</li>
          </ul>

          <h3>Safety Tips</h3>
          <ul>
            <li>Do not use phone while charging.</li>
            <li>Do not drop the phone.</li>
            <li>Keep it away from water.</li>
            <li>Do not use phone for too many hours.</li>
          </ul>

          <br /><br />

          {/* Back Button */}
          <button onClick={() => navigate(-1)}>⬅ Back</button>

        </div>
      </div>
    </>
  );
}

export default MobileChild;