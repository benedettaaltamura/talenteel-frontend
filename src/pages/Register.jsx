import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Navbar from "../components/Navbar";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const { register } = useContext(AuthContext);

  // Role (pre-filled if coming from Home CTA)
  const [role, setRole] = useState(location.state?.role || "USER");

  // Auth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // User (Talent) fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [figmaUrl, setFigmaUrl] = useState("");

  // Company fields
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [position, setPosition] = useState("");
  const [website, setWebsite] = useState("");
  const [companySize, setCompanySize] = useState("");

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      email,
      password,
      role,
      first_name: firstName,
      last_name: lastName,
      title,
      bio,
      skills: "",
      portfolio_url: portfolioUrl,
      github_url: githubUrl,
      figma_url: figmaUrl,
      company_name: companyName,
      industry,
      position,
      company_size: companySize,
      website,
      description: "",
    };

    const result = await register(payload);
    setLoading(false);

    if (result.success) {
      if (result.user?.role === "USER") {
        navigate("/user");
      } else {
        navigate("/onboarding/company");
      }
    } else {
      setError(result.error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="register">
        <div className="register-card">
          <h1>Join Talenteel</h1>
          <p className="register-subtitle">
            {role === "USER"
              ? "Create your account and start building your profile."
              : "Create your company account and find top talent."}
          </p>

          <form onSubmit={handleSubmit}>
            {/* ROLE TOGGLE */}
            <div className="role-toggle">
              <button
                type="button"
                className={role === "USER" ? "active" : ""}
                onClick={() => setRole("USER")}
              >
                I’m a Talent
              </button>
              <button
                type="button"
                className={role === "COMPANY" ? "active" : ""}
                onClick={() => setRole("COMPANY")}
              >
                I’m a Company
              </button>
            </div>

            {/* AUTH */}
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* USER FIELDS */}
            {role === "USER" && (
              <>
                <div className="field">
                  <label>First name</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label>Last name</label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label>Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows="4"
                  />
                </div>
              </>
            )}

            {/* COMPANY FIELDS */}
            {role === "COMPANY" && (
              <>
                <div className="field">
                  <label>Company name</label>
                  <input
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>

                <div className="field">
                  <label>Industry</label>
                  <input
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            {error && <p className="error">{error}</p>}

            <button className="primary full" disabled={loading}>
              {loading ? "Creating account…" : "Create account →"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}