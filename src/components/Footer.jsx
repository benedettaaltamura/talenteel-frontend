import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <img src={logo} alt="Talenteel" className="footer-logo" />
            <p>
              Video-first recruiting for the next generation of European talent. Born in Barcelona, built for the whole continent.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h3>PRODUCT</h3>
              <ul>
                <li>
                  <Link to="/feed">Feed</Link>
                </li>
                <li>
                  <Link to="/talent">Talent</Link>
                </li>
                <li>
                  <Link to="/challenges">Challenges</Link>
                </li>
                <li>
                  <Link to="/recruiter">For Recruiters</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>COMPANY</h3>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>LEGAL</h3>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">GDPR</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Talenteel. A prototype concept.</p>
          <p className="footer-credits">Made with espresso in Puglia · Barcelona</p>
        </div>
      </div>
    </footer>
  );
}
