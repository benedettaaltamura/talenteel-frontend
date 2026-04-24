// src/components/Navbar.jsx
import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import "./Navbar.css";
import { AuthContext } from "../auth/AuthContext";
import { useCompanyAuth } from "../auth/CompanyAuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout: logoutUser } = useContext(AuthContext);
  const { company, logout: logoutCompany } = useCompanyAuth();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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
        {(user || company) ? (
          <div className="auth-actions">
            {user && (
              <button
                type="button"
                className="cta"
                onClick={() => navigate("/user")}
              >
                Profilo
              </button>
            )}
            {company && (
              <button
                type="button"
                className="cta"
                onClick={() => navigate("/company/dashboard")}
              >
                Dashboard
              </button>
            )}
            <button type="button" className="cta secondary" onClick={() => {
              if (user) logoutUser();
              if (company) logoutCompany();
              navigate(user ? "/login" : "/company/login");
            }}>
              Esci
            </button>
          </div>
        ) : (
          <>
            <div className={`dropdown ${isDropdownOpen ? "open" : ""}`} onMouseLeave={closeDropdown}>
              <button type="button" className="cta" onClick={toggleDropdown} aria-expanded={isDropdownOpen}>
                Login ▼
              </button>
              <div className="dropdown-menu">
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    navigate('/login');
                    closeDropdown();
                  }}
                >
                  Talent Login
                </button>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    navigate('/company/login');
                    closeDropdown();
                  }}
                >
                  Company Login
                </button>
              </div>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </>
        )}
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