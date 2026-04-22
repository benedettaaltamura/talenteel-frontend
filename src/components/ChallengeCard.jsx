import './ChallengeCard.css';

export default function ChallengeCard({ challenge }) {
  return (
    <div className="challenge-card">
      <div className="challenge-card-header">
        <div className="challenge-company-info">
          {challenge.company_logo && (
            <img src={challenge.company_logo} alt={challenge.company_name} className="company-logo" />
          )}
          <div className="company-details">
            <h3 className="company-name">{challenge.company_name}</h3>
            <p className="company-meta">
              {challenge.industry} {challenge.location && `· ${challenge.location}`}
            </p>
          </div>
        </div>
        <div className="days-left">{challenge.days_left}d left</div>
      </div>

      <div className="challenge-content">
        <h2 className="challenge-title">{challenge.title}</h2>
        <p className="challenge-description">{challenge.description}</p>
      </div>

      <div className="challenge-info-row">
        <div className="info-section">
          <label>Role</label>
          <p>{challenge.role}</p>
        </div>
        <div className="info-section">
          <label>
            <span className="reward-icon">🎁</span> Reward
          </label>
          <p>{challenge.reward}</p>
        </div>
      </div>

      <div className="challenge-footer">
        <div className="submissions-info">
          <span className="submissions-icon">👥</span>
          <span>{challenge.submissions_count} submissions</span>
        </div>
        <button className="submit-btn">Submit a video</button>
      </div>
    </div>
  );
}
