import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCompanyAuth, MOCK_COMPANIES_LIST } from '../auth/CompanyAuthContext';
import Navbar from '../components/Navbar';
import './CompanyLogin.css';

export default function CompanyLogin() {
  const navigate = useNavigate();
  const { login } = useCompanyAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      const result = login(email, password);
      setLoading(false);

      if (result.success) {
        navigate('/company/dashboard');
      } else {
        setError(result.error);
      }
    }, 500);
  };

  const handleDemoLogin = (companyEmail) => {
    setEmail(companyEmail);
    setPassword('password123');
    setTimeout(() => {
      const result = login(companyEmail, 'password123');
      if (result.success) {
        navigate('/company/dashboard');
      }
    }, 300);
  };

  return (
    <>
      <Navbar />
      <div className="company-login-container">
        <div className="login-card">
          <h1>Company Access</h1>
          <p>Accedi come azienda per gestire le tue challenge e candidati</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="company@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Accesso in corso...' : 'Accedi'}
            </button>
          </form>

          <div className="demo-section">
            <p>Demo Accounts (usa password: <strong>password123</strong>)</p>
            <div className="demo-buttons">
              {MOCK_COMPANIES_LIST.map((company) => (
                <button
                  key={company.id}
                  className="demo-button"
                  onClick={() => handleDemoLogin(company.email)}
                >
                  <span className="company-name">{company.name}</span>
                  <span className="company-email">{company.email}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
