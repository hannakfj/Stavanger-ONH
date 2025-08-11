import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Treatments from "./pages/Treatments";
import TreatmentDetail from "./components/Treatment";
import Staff from "./pages/Staff";
import HearingAid from "./pages/HearingAid";
import AboutPage from "./pages/About";
import Appointment from "./pages/Appointment";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="treatments" element={<Treatments />} />
        <Route path="/treatment/:slug" element={<TreatmentDetail />} />
        <Route path="employees" element={<Staff />} />
        <Route path="hearingaid" element={<HearingAid />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
}
