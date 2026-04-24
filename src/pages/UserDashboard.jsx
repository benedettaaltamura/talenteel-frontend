import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import Navbar from "../components/Navbar";
import "./UserDashboard.css";

export default function UserDashboard() {
  const { user } = useContext(AuthContext);
  const [applied, setApplied] = useState([]);

  const companies = [
    {
      id: 1,
      name: "Ferrero",
      role: "UX Designer",
      location: "Alba, Italy",
      description: "Design digital experiences for market-leading brands.",
    },
    {
      id: 2,
      name: "Gucci",
      role: "Product Designer",
      location: "Florence, Italy",
      description: "Work on luxury online products and brand interactions.",
    },
    {
      id: 3,
      name: "TikTok",
      role: "Interaction Designer",
      location: "Milan, Italy",
      description: "Create social and mobile-first user experiences.",
    },
  ];

  const handleApply = (companyId) => {
    setApplied((current) => [...new Set([...current, companyId])]);
  };

  if (!user) {
    return (
      <div className="register">
        <div className="register-card">
          <h1>Accesso richiesto</h1>
          <p>Devi accedere prima di visualizzare il dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="user-dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Ciao, {user.user_profile?.first_name || user.email}!</h1>
            <p>Questa è la tua area personale talent.</p>
          </div>
        </div>

        <section className="profile-section">
          <div className="profile-card">
            <h2>Profilo personale</h2>
            <p>
              <strong>Nome:</strong> {user.user_profile?.first_name} {user.user_profile?.last_name}
            </p>
            <p>
              <strong>Ruolo:</strong> {user.user_profile?.title || "-"}
            </p>
            <p>
              <strong>Bio:</strong> {user.user_profile?.bio || "Aggiungi una breve descrizione del tuo profilo."}
            </p>
            <p>
              <strong>Competenze:</strong> {user.user_profile?.skills || "N/D"}
            </p>
            <div className="profile-links">
              {user.user_profile?.portfolio_url && (
                <a href={user.user_profile.portfolio_url} target="_blank" rel="noreferrer">
                  Portfolio
                </a>
              )}
              {user.user_profile?.github_url && (
                <a href={user.user_profile.github_url} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {user.user_profile?.figma_url && (
                <a href={user.user_profile.figma_url} target="_blank" rel="noreferrer">
                  Figma
                </a>
              )}
            </div>
          </div>

          <div className="company-card">
            <h2>Aziende interessate</h2>
            <p>Scopri opportunità e candidati per collaborazioni.</p>
            {companies.map((company) => (
              <div key={company.id} className="company-item">
                <div>
                  <h3>{company.name}</h3>
                  <p className="company-role">{company.role}</p>
                  <p className="company-location">{company.location}</p>
                  <p>{company.description}</p>
                </div>
                <button
                  className="primary small"
                  type="button"
                  disabled={applied.includes(company.id)}
                  onClick={() => handleApply(company.id)}
                >
                  {applied.includes(company.id) ? "Candidata" : "Candidati"}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
