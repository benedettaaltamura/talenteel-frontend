// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo2.png";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-links">
              <li>
                <NavLink to="/" end className="mobile-nav-link" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/feed" className="mobile-nav-link" onClick={closeMenu}>
                  Feed
                </NavLink>
              </li>
              <li>
                <NavLink to="/talent" className="mobile-nav-link" onClick={closeMenu}>
                  Talent
                </NavLink>
              </li>
              <li>
                <NavLink to="/challenges" className="mobile-nav-link" onClick={closeMenu}>
                  Challenges
                </NavLink>
              </li>
              <li>
                <NavLink to="/recruiter" className="mobile-nav-link" onClick={closeMenu}>
                  Recruiter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}