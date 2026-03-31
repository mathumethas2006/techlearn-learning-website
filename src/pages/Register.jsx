import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../register.css";

function Register() {

  const navigate = useNavigate();

  // ===== STATE =====
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    course: "",
    level: "",
    mode: "",
    terms: false
  });

  const [age, setAge] = useState("");
  const [welcomeUser, setWelcomeUser] = useState("");
  const [visitCount, setVisitCount] = useState(0);

  // ===== REGEX =====
  const nameRegex = /^[A-Za-z]{3,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const cityRegex = /^[A-Za-z ]{3,30}$/;
  const stateRegex = /^[A-Za-z ]{3,30}$/;
  const pincodeRegex = /^[0-9]{6}$/;
  const addressRegex = /^.{5,100}$/;

  // ===== HANDLE INPUT =====
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  }

  // ===== AGE =====
  function calculateAge(e) {
    let dob = new Date(e.target.value);
    let today = new Date();

    let a = today.getFullYear() - dob.getFullYear();
    let m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      a--;
    }

    setAge(a);
  }

  // ===== COOKIE =====
  function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 86400000);
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString();
  }

  function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (let c of cookies) {
      let [key, value] = c.trim().split("=");
      if (key === name) return value;
    }
    return null;
  }

  // ===== LOAD =====
  useEffect(() => {
    let username = getCookie("username");
    if (username) {
      setWelcomeUser("Welcome back, " + username + " 👋");
    }

    let count = getCookie("registerVisit");
    count = count ? Number(count) + 1 : 1;

    setCookie("registerVisit", count, 7);
    setVisitCount(count);
  }, []);

  // ===== SUBMIT =====
  function handleSubmit(e) {
    e.preventDefault();

    if (!nameRegex.test(form.fname)) return alert("Enter valid First Name");
    if (!nameRegex.test(form.lname)) return alert("Enter valid Last Name");

    if (!emailRegex.test(form.email)) return alert("Enter valid Email");
    if (!phoneRegex.test(form.phone)) return alert("Enter valid Phone");

    if (!addressRegex.test(form.address)) return alert("Enter valid Address");
    if (!cityRegex.test(form.city)) return alert("Enter valid City");
    if (!stateRegex.test(form.state)) return alert("Enter valid State");

    if (!pincodeRegex.test(form.pincode)) return alert("Enter valid Pincode");

    if (!form.course) return alert("Select course");
    if (!form.level) return alert("Select level");
    if (!form.mode) return alert("Select mode");

    if (!form.terms) return alert("Accept terms");

    setCookie("username", form.fname, 7);

    alert("Registration Successful! 🎉");

    // ✅ REDIRECT TO ASSESSMENT PAGE
    navigate("/assessment");
  }

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <h2 className="logo">TechLearn</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register" className="active">Register</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/assessment">Assessment</Link>
          <Link to="/feedback">Feedback</Link>
        </nav>
      </header>

      <div className="container">
        <h1>Course Registration</h1>

        <p className="info">{welcomeUser}</p>
        <p className="info">Visited {visitCount} times</p>

        <form onSubmit={handleSubmit}>

          <div className="row">
            <input name="fname" placeholder="First Name" onChange={handleChange} />
            <input name="lname" placeholder="Last Name" onChange={handleChange} />
          </div>

          <input type="date" onChange={calculateAge} />
          <input value={age} readOnly placeholder="Age" />

          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />

          <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>

          <div className="row">
            <input name="city" placeholder="City" onChange={handleChange} />
            <input name="state" placeholder="State" onChange={handleChange} />
          </div>

          <input name="pincode" placeholder="Pincode" onChange={handleChange} />

          <select name="course" onChange={handleChange}>
            <option value="">Course</option>
            <option>Mobile Internals</option>
            <option>TV Internals</option>
          </select>

          <select name="level" onChange={handleChange}>
            <option value="">Level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
          </select>

          <select name="mode" onChange={handleChange}>
            <option value="">Mode</option>
            <option>Online</option>
            <option>Offline</option>
          </select>

          <label>
            <input type="checkbox" name="terms" onChange={handleChange} />
            Accept Terms
          </label>

          <button type="submit">REGISTER</button>

        </form>

        

      </div>
    </>
  );
}

export default Register;