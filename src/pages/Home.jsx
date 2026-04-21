import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">

          {/* LEFT */}
          <div className="hero-left">
            <span className="badge">Now in beta · Europe</span>

            <h1>
              Hiring is stuck in 2005. <br />
              <span>Talent lives in video.</span>
            </h1>

            <p>
              Talenteel is a video‑first recruiting platform that connects
              students and new grads with companies through short videos,
              challenges and digital portfolios.
            </p>

            <div className="stats">
              <span><strong>5.3k</strong> Candidates</span>
              <span><strong>348</strong> Companies</span>
              <span><strong>24.6k</strong> Videos shared</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right">
            <div className="video-card main">Video</div>
            <div className="video-card">Video</div>
            <div className="video-card">Video</div>
          </div>

        </div>
      </section>

      {/* WHY TALENTEEL */}
      <section className="why">
        <div className="container">

          <div className="why-header">
            <span className="why-label">WHY TALENTEEL</span>

            <h2>
              The CV is dead. <br />
              <span>Personality isn't.</span>
            </h2>

            <p>
              A 60‑second video tells a recruiter more than 3 pages of bullet
              points ever could — and it takes them less time to watch.
            </p>
          </div>

          <div className="why-grid">

            <div className="why-card">
              <h3>Short video pitches</h3>
              <p>
                Record a 60‑second pitch from your phone. Show your voice,
                energy and personality before a CV is even opened.
              </p>
            </div>

            <div className="why-card">
              <h3>Company challenges</h3>
              <p>
                Real briefs from companies. Submit your response in video
                and get fast‑tracked to interviews.
              </p>
            </div>

            <div className="why-card">
              <h3>Portfolio that moves</h3>
              <p>
                Connect GitHub, Figma, case studies and projects into a
                living, dynamic portfolio.
              </p>
            </div>

            <div className="why-card">
              <h3>For recruiters: swipe shortlists</h3>
              <p>
                Browse talent in a vertical feed and swipe right to
                shortlist, left to pass.
              </p>
            </div>

            <div className="why-card">
              <h3>Built for speed</h3>
              <p>
                Candidates land in recruiter shortlists in seconds — no
                stale job boards or endless forms.
              </p>
            </div>

            <div className="why-card">
              <h3>GDPR‑first</h3>
              <p>
                Built in Europe with full data control, privacy by design
                and GDPR compliance from day one.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* REGISTRATION SECTION */}
      <section className="registration">
        <div className="container registration-grid">

          {/* CANDIDATES */}
          <div className="registration-card">
            <span className="pill">FOR CANDIDATES</span>

            <h3>Show what a CV can't.</h3>

            <ul className="steps">
              <li>
                <span>1</span>
                <div>
                  <strong>Claim your profile</strong>
                  <p>One minute. Phone. No recruiter jargon.</p>
                </div>
              </li>

              <li>
                <span>2</span>
                <div>
                  <strong>Record your pitch</strong>
                  <p>60 seconds on who you are and what you want to build.</p>
                </div>
              </li>

              <li>
                <span>3</span>
                <div>
                  <strong>Take on challenges</strong>
                  <p>Answer real briefs from companies in video.</p>
                </div>
              </li>

              <li>
                <span>4</span>
                <div>
                  <strong>Get discovered</strong>
                  <p>Recruiters swipe. Interviews come to you.</p>
                </div>
              </li>
            </ul>

            <button className="primary" onClick={() => navigate("/register")}>
              Build your profile →
            </button>
          </div>

          {/* COMPANIES */}
          <div className="registration-card">
            <span className="pill pink">FOR COMPANIES</span>

            <h3>Hire for signal, not keywords.</h3>

            <ul className="steps">
              <li>
                <span>1</span>
                <div>
                  <strong>Open a challenge</strong>
                  <p>Write a 2‑line brief — get video responses in days.</p>
                </div>
              </li>

              <li>
                <span>2</span>
                <div>
                  <strong>Swipe the feed</strong>
                  <p>15 minutes a day. Shortlist the ones who move you.</p>
                </div>
              </li>

              <li>
                <span>3</span>
                <div>
                  <strong>Compare at a glance</strong>
                  <p>Side‑by‑side videos, portfolios — no PDFs.</p>
                </div>
              </li>

              <li>
                <span>4</span>
                <div>
                  <strong>Move to interview</strong>
                  <p>Fast‑track the best. Stop chasing recruiters.</p>
                </div>
              </li>
            </ul>

            <button className="primary" onClick={() => navigate("/register", { state: { role: "COMPANY" } })}>
              Try the recruiter view →
            </button>
          </div>

        </div>
      </section>
    </>
  );
}