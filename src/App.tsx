import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Treatments from "./pages/Treatments";
import TreatmentDetail from "./components/Treatment";
import Staff from "./pages/Staff";
import HearingAid from "./pages/HearingAid";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="treatments" element={<Treatments />} />
        <Route path="/treatment/:name" element={<TreatmentDetail />} />
        <Route path="employees" element={<Staff />} />
        <Route path="hearingaid" element={<HearingAid />} />
      </Routes>
    </>
  );
}
