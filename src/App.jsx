// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { CompanyAuthProvider } from "./auth/CompanyAuthContext";
import ScrollToTop from "./components/ScrollToTop";
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
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import UserActivities from "./pages/UserActivities";
import UserCompanies from "./pages/UserCompanies";
import UserChallenges from "./pages/UserChallenges";
import UserStats from "./pages/UserStats";

export default function App() {
  return (
    <AuthProvider>
      <CompanyAuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/recruiter" element={<Recruiter />} />
            
            <Route path="/register" element={<Register />} />
            <Route path="/onboarding/user" element={<OnboardingUser />} />
            <Route path="/onboarding/company" element={<OnboardingCompany />} />
            
            <Route path="/company/login" element={<CompanyLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/company/dashboard" element={<CompanyDashboard />} />

            <Route path="/user" element={<UserDashboard />}>
              <Route index element={<Navigate to="profile" replace />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="activities" element={<UserActivities />} />
              <Route path="companies" element={<UserCompanies />} />
              <Route path="challenges" element={<UserChallenges />} />
              <Route path="stats" element={<UserStats />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CompanyAuthProvider>
    </AuthProvider>
  );
}