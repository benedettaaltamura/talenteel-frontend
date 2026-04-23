// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompanyAuthProvider } from "./auth/CompanyAuthContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import OnboardingUser from "./pages/OnboardingUser";
import OnboardingCompany from "./pages/OnboardingCompany";
import Recruiter from "./pages/Recruiter";
import Talent from "./pages/Talent";
import Challenges from "./pages/Challenges";
import CompanyLogin from "./pages/CompanyLogin";
import CompanyDashboard from "./pages/CompanyDashboard";
import Login from "./pages/Login";

export default function App() {
  return (
    <CompanyAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<div>Feed</div>} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/recruiter" element={<Recruiter />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/onboarding/user" element={<OnboardingUser />} />
          <Route path="/onboarding/company" element={<OnboardingCompany />} />
          
          <Route path="/company/login" element={<CompanyLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company/dashboard" element={<CompanyDashboard />} />
        </Routes>
      </BrowserRouter>
    </CompanyAuthProvider>
  );
}