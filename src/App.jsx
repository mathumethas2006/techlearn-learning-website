import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Register from "./pages/Register.jsx";
import Learn from "./pages/learn.jsx";
import Assessment from "./pages/assessment.jsx";
import Feedback from "./pages/feedback.jsx";

/* ===== TV ===== */
import TvChild from "./pages/learnPages/TvChild.jsx";
import TvTeen from "./pages/learnPages/TvTeen.jsx";
import TvAdult from "./pages/learnPages/TvAdult.jsx";

/* ===== MOBILE ===== */
import MobileChild from "./pages/learnPages/MobileChild.jsx";
import MobileTeen from "./pages/learnPages/MobileTeen.jsx";
import MobileAdult from "./pages/learnPages/MobileAdult.jsx";

/* ===== AC ===== */
import AcChild from "./pages/learnPages/AcChild.jsx";
import AcTeen from "./pages/learnPages/AcTeen.jsx";
import AcAdult from "./pages/learnPages/AcAdult.jsx";

/* ===== LAPTOP ===== */
import LaptopChild from "./pages/learnPages/LaptopChild.jsx";
import LaptopTeen from "./pages/learnPages/LaptopTeen.jsx";
import LaptopAdult from "./pages/learnPages/LaptopAdult.jsx";

/* ===== ASSESSMENT PAGES ===== */
import AssessmentTv from "./pages/assessmentPages/AssessmentTv.jsx";
import AssessmentMobile from "./pages/assessmentPages/AssessmentMobile.jsx";
import AssessmentAc from "./pages/assessmentPages/AssessmentAc.jsx";
import AssessmentLaptop from "./pages/assessmentPages/AssessmentLaptop.jsx";

function App() {
  return (
    <Router>
      <Routes>

        {/* MAIN */}
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* TV */}
        <Route path="/tv-child" element={<TvChild />} />
        <Route path="/tv-teen" element={<TvTeen />} />
        <Route path="/tv-adult" element={<TvAdult />} />

        {/* MOBILE */}
        <Route path="/mobile-child" element={<MobileChild />} />
        <Route path="/mobile-teen" element={<MobileTeen />} />
        <Route path="/mobile-adult" element={<MobileAdult />} />

        {/* AC */}
        <Route path="/ac-child" element={<AcChild />} />
        <Route path="/ac-teen" element={<AcTeen />} />
        <Route path="/ac-adult" element={<AcAdult />} />

        {/* LAPTOP */}
        <Route path="/laptop-child" element={<LaptopChild />} />
        <Route path="/laptop-teen" element={<LaptopTeen />} />
        <Route path="/laptop-adult" element={<LaptopAdult />} />

        {/* ASSESSMENT */}
        <Route path="/assessment-tv" element={<AssessmentTv />} />
        <Route path="/assessment-mobile" element={<AssessmentMobile />} />
        <Route path="/assessment-ac" element={<AssessmentAc />} />
        <Route path="/assessment-laptop" element={<AssessmentLaptop />} />

      </Routes>
    </Router>
  );
}

export default App;