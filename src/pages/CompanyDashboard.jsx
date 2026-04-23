import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanyAuth } from '../auth/CompanyAuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CompanyDashboard.css';

export default function CompanyDashboard() {
  const navigate = useNavigate();
  const { company, logout } = useCompanyAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!company) {
    return (
      <>
        <Navbar />
        <div className="company-dashboard-container">
          <div className="not-logged-in">
            <h2>Accedi per continuare</h2>
            <button onClick={() => navigate('/company/login')} className="primary-button">
              Vai al login
            </button>
          </div>
        </div>
      </>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="company-dashboard-container">
        <div className="company-header">
          <div className="company-info">
            <div className="company-icon">{company.name.charAt(0)}</div>
            <div className="company-details">
              <h1>{company.name}</h1>
              <p>{company.industry}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Esci
          </button>
        </div>

        <div className="dashboard-nav">
          <button
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Panoramica
          </button>
          <button
            className={`nav-tab ${activeTab === 'candidates' ? 'active' : ''}`}
            onClick={() => setActiveTab('candidates')}
          >
            Candidati
          </button>
          <button
            className={`nav-tab ${activeTab === 'challenges' ? 'active' : ''}`}
            onClick={() => setActiveTab('challenges')}
          >
            Le mie Challenge
          </button>
        </div>

        <div className="dashboard-content">
          {activeTab === 'overview' && <OverviewTab company={company} />}
          {activeTab === 'candidates' && <CandidatesTab company={company} />}
          {activeTab === 'challenges' && <ChallengesTab company={company} />}
        </div>
      </div>
      <Footer />
    </>
  );
}

function OverviewTab({ company }) {
  return (
    <div className="tab-content">
      <h2>Panoramica Azienda</h2>
      
      <div className="overview-grid">
        <div className="overview-card">
          <h3>Info Generali</h3>
          <div className="info-group">
            <label>Nome Azienda</label>
            <p>{company.name}</p>
          </div>
          <div className="info-group">
            <label>Industria</label>
            <p>{company.industry}</p>
          </div>
          <div className="info-group">
            <label>Locazione</label>
            <p>{company.location}</p>
          </div>
          <div className="info-group">
            <label>Dipendenti</label>
            <p>{company.employees}</p>
          </div>
          <div className="info-group">
            <label>Website</label>
            <p>{company.website}</p>
          </div>
        </div>

        <div className="overview-card">
          <h3>Descrizione</h3>
          <p className="description">{company.description}</p>
        </div>

        <div className="overview-card stats-card">
          <h3>Statistiche</h3>
          <div className="stat">
            <span className="stat-value">8</span>
            <span className="stat-label">Challenge Pubblicate</span>
          </div>
          <div className="stat">
            <span className="stat-value">247</span>
            <span className="stat-label">Candidature Ricevute</span>
          </div>
          <div className="stat">
            <span className="stat-value">32</span>
            <span className="stat-label">Candidati in Valutazione</span>
          </div>
          <div className="stat">
            <span className="stat-value">5</span>
            <span className="stat-label">Colloqui Programmati</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CandidatesTab({ company }) {
  const candidates = [
    {
      id: 1,
      name: 'Sofia Romano',
      role: 'Brand Marketing Intern',
      score: '+92',
      status: 'Reviewing',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      id: 2,
      name: 'Marco Bianchi',
      role: 'Product Manager',
      score: '+88',
      status: 'Interview Scheduled',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 3,
      name: 'Emma Lindgren',
      role: 'Content Creator',
      score: '+90',
      status: 'Reviewing',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    {
      id: 4,
      name: 'David Okoye',
      role: 'Brand Marketing Intern',
      score: '+94',
      status: 'Accepted',
      avatar: 'https://i.pravatar.cc/150?img=56',
    },
  ];

  return (
    <div className="tab-content">
      <h2>Candidati Idonei per le tue Posizioni</h2>
      <div className="candidates-list">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="candidate-item">
            <img src={candidate.avatar} alt={candidate.name} className="candidate-avatar" />
            <div className="candidate-info">
              <h4>{candidate.name}</h4>
              <p className="candidate-role">{candidate.role}</p>
              <p className="candidate-status">{candidate.status}</p>
            </div>
            <div className="candidate-score">{candidate.score}</div>
            <button className="view-button">Visualizza</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChallengesTab({ company }) {
  const myChallenges = [
    {
      id: 1,
      title: 'The Nutella Gen-Z Moment',
      submissions: 47,
      role: 'Brand Marketing Intern',
      status: 'Active',
      daysLeft: 12,
    },
    {
      id: 2,
      title: 'Ferrero Social Campaign',
      submissions: 23,
      role: 'Content Creator',
      status: 'Active',
      daysLeft: 5,
    },
    {
      id: 3,
      title: 'Brand Strategy Challenge',
      submissions: 15,
      role: 'Marketing Manager',
      status: 'Closed',
      daysLeft: 0,
    },
  ];

  return (
    <div className="tab-content">
      <h2>Le Mie Challenge</h2>
      <button className="create-challenge-button">+ Crea Nuova Challenge</button>
      
      <div className="challenges-list">
        {myChallenges.map((challenge) => (
          <div key={challenge.id} className="challenge-item">
            <div className="challenge-header">
              <h3>{challenge.title}</h3>
              <span className={`status-badge ${challenge.status.toLowerCase()}`}>
                {challenge.status}
              </span>
            </div>
            <div className="challenge-meta">
              <div className="meta-item">
                <span className="label">Ruolo Richiesto</span>
                <span className="value">{challenge.role}</span>
              </div>
              <div className="meta-item">
                <span className="label">Candidature</span>
                <span className="value">{challenge.submissions}</span>
              </div>
              <div className="meta-item">
                <span className="label">Giorni Rimasti</span>
                <span className="value">{challenge.daysLeft > 0 ? `${challenge.daysLeft}d` : 'Concluso'}</span>
              </div>
            </div>
            <div className="challenge-actions">
              <button className="action-button">Visualizza Candidature</button>
              <button className="action-button secondary">Modifica</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
