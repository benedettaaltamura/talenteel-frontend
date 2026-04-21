// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Talenteel logo" className="logo" />
      </div>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/feed" className="nav-link">
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/talent" className="nav-link">
            Talent
          </NavLink>
        </li>
        <li>
          <NavLink to="/challenges" className="nav-link">
            Challenges
          </NavLink>
        </li>
        <li>
          <NavLink to="/recruiter" className="nav-link">
            Recruiter
          </NavLink>
        </li>
      </ul>

      <div className="navbar-right">
        <button className="cta">Join as Talent</button>
      </div>
    </nav>
  );
}
