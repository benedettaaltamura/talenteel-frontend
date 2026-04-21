// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import OnboardingUser from "./pages/OnboardingUser";
import OnboardingCompany from "./pages/OnboardingCompany";
import Recruiter from "./pages/Recruiter";
import Talent from "./pages/Talent";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<div>Feed</div>} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/challenges" element={<div>Challenges</div>} />
        <Route path="/recruiter" element={<Recruiter />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding/user" element={<OnboardingUser />} />
        <Route path="/onboarding/company" element={<OnboardingCompany />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/talent" element={<Talent />} />
      </Routes>
    </BrowserRouter>
  );
}