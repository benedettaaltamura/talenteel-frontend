import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import "./Onboarding.css";

export default function OnboardingCompany() {
  return (
    <>
      <Navbar />

      <div className="onboarding">
        <div className="onboarding-container">

          <ProgressBar step={1} total={3} />

          <span className="onboarding-label">WELCOME</span>
          <h1>Let’s set up your company.</h1>

          <p className="onboarding-subtitle">
            Create your company profile.
            You’ll start discovering talent in minutes.
          </p>

          <form className="onboarding-form">

            <div className="field">
              <label>Company name</label>
              <input placeholder="Talentee Labs" />
            </div>

            <div className="row">
              <div className="field">
                <label>Industry</label>
                <input placeholder="Tech / Media / Consulting" />
              </div>
              <div className="field">
                <label>Company size</label>
                <input placeholder="11‑50 employees" />
              </div>
            </div>

            <div className="field">
              <label>Website</label>
              <input placeholder="https://yourcompany.com" />
            </div>

            <div className="field">
              <label>Short description</label>
              <textarea placeholder="What makes your company interesting to talent?" />
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
``