import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import "./Onboarding.css";

export default function OnboardingUser() {
  return (
    <>
      <Navbar />

      <div className="onboarding">
        <div className="onboarding-container">

          <ProgressBar step={1} total={4} />

          <span className="onboarding-label">WELCOME</span>
          <h1>Let's build your profile.</h1>

          <p className="onboarding-subtitle">
            Four quick steps. No CV required.
            You’ll record a 60‑second video at the end.
          </p>

          <form className="onboarding-form">

            <div className="row">
              <div className="field">
                <label>Full name</label>
                <input placeholder="Diego Montesi" />
              </div>
              <div className="field">
                <label>Age</label>
                <input placeholder="22" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>City</label>
                <input placeholder="Barcelona" />
              </div>
              <div className="field">
                <label>University</label>
                <input placeholder="EU Business School" />
              </div>
            </div>

            <div className="field">
              <label>Degree</label>
              <input placeholder="BSc Digital Business" />
            </div>

            <div className="field">
              <label>One‑line headline</label>
              <input placeholder="Brand storyteller with a Gen‑Z radar" />
              <small>
                This is the one sentence a recruiter will read above your video.
              </small>
            </div>

            <div className="actions">
              <button className="primary">
                Continue →
              </button>
            </div>

          </form>

        </div>
      </div>
    </>
  );
}