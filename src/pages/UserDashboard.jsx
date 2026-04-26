import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./UserDashboard.css";

export default function UserDashboard() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="register">
        <div className="register-card">
          <h1>Access required</h1>
          <p>You need to log in before accessing the talent dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="user-dashboard">
        <div className="dashboard-topbar">
          <div className="dashboard-heading">
            <span className="section-label">Talent profile</span>
            <h1>Welcome back, {user.user_profile?.first_name || user.email}</h1>
            <p>Choose a section to manage your profile, activity, company opportunities, challenges and account stats.</p>
          </div>

          <nav className="dashboard-tabs">
            <NavLink to="profile" className={({ isActive }) => isActive ? "tab-button active" : "tab-button"}>
              Profile
            </NavLink>
            <NavLink to="activities" className={({ isActive }) => isActive ? "tab-button active" : "tab-button"}>
              Activity
            </NavLink>
            <NavLink to="companies" className={({ isActive }) => isActive ? "tab-button active" : "tab-button"}>
              Companies
            </NavLink>
            <NavLink to="challenges" className={({ isActive }) => isActive ? "tab-button active" : "tab-button"}>
              Challenges
            </NavLink>
            <NavLink to="stats" className={({ isActive }) => isActive ? "tab-button active" : "tab-button"}>
              Stats
            </NavLink>
          </nav>
        </div>
        <section className="dashboard-content">
          <Outlet />
        </section>
      </main>

      <Footer />
    </>
  );
}
