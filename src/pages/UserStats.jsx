import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function UserStats() {
  const { user } = useContext(AuthContext);
  const skillCount = user?.user_profile?.skills
    ? user.user_profile.skills.split(",").filter(Boolean).length
    : 0;

  const applications = user?.applications || [];
  const challengeHistory = user?.challenge_history || [];
  const totalApplications = applications.length;
  const newInterviews = applications.filter((item) =>
    item.status?.toLowerCase().includes("interview")
  ).length;
  const acceptedOffers = applications.filter(
    (item) => item.status?.toLowerCase() === "accepted"
  ).length;
  const activeApplications = applications.filter(
    (item) =>
      item.status?.toLowerCase() !== "rejected" &&
      item.status?.toLowerCase() !== "accepted"
  ).length;

  const completedChallenges = challengeHistory.filter(
    (item) => item.status?.toLowerCase() === "completed"
  ).length;
  const pendingChallenges = challengeHistory.filter(
    (item) =>
      item.status?.toLowerCase() === "enrolled" ||
      item.status?.toLowerCase() === "pending"
  ).length;
  const topPlacements = challengeHistory.filter(
    (item) => item.place && item.place <= 3
  ).length;

  const profileHealth = Math.min(
    96,
    Math.max(
      65,
      40 + skillCount * 7 + acceptedOffers * 6 + completedChallenges * 4
    )
  );

  const recentApplications = applications.slice(-2).reverse();
  const recentChallenges = challengeHistory.slice(-2).reverse();

  return (
    <section className="section stats-page">
      <div className="section-card">
        <div className="section-head">
          <div>
            <h2>Account analytics</h2>
            <p>See your talent profile performance, application momentum, and challenge progress together.</p>
          </div>
          <span className="pill">Dashboard</span>
        </div>

        <div className="stats-hero">
          <div className="stats-hero-copy">
            <h3>Profile dashboard</h3>
            <p>Focus on the numbers that matter: how many roles you’ve applied for, challenge progress, and how strong your profile is.</p>
            <div className="hero-pill-row">
              <span className="hero-pill">{totalApplications} applications</span>
              <span className="hero-pill">{challengeHistory.length} challenges</span>
              <span className="hero-pill">{skillCount} skills</span>
            </div>
          </div>

          <div className="stats-hero-image">
            <div className="stats-image-panel">
              <div className="stats-image-dot" />
              <div className="stats-image-shape" />
              <div className="stats-image-card">
                <span>Profile health</span>
                <strong>{profileHealth}%</strong>
                <p>{profileHealth > 88 ? "You’re visible to top recruiters." : "Update your skills and activity to improve."}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-overview-grid">
          <div className="stats-card stats-card-large">
            <div className="stats-card-title">
              <span>Overall performance</span>
              <strong>{profileHealth}%</strong>
            </div>
            <p>Profile strength combines skills, activity, and recruiter interest to show where your profile stands.</p>
            <div className="progress-meter">
              <div className="progress-fill" style={{ width: `${profileHealth}%` }} />
            </div>
          </div>
          <div className="stats-card">
            <span>Active applications</span>
            <strong>{activeApplications}</strong>
            <p>Roles still in review or interview stage.</p>
          </div>
          <div className="stats-card">
            <span>Completed challenges</span>
            <strong>{completedChallenges}</strong>
            <p>Challenges finished and ranked on the leaderboard.</p>
          </div>
          <div className="stats-card">
            <span>Interview invites</span>
            <strong>{newInterviews}</strong>
            <p>Recruiters that requested a follow-up conversation.</p>
          </div>
          <div className="stats-card">
            <span>Top placements</span>
            <strong>{topPlacements}</strong>
            <p>Challenges where you ranked in the top 3.</p>
          </div>
          <div className="stats-card">
            <span>Accepted offers</span>
            <strong>{acceptedOffers}</strong>
            <p>Positions already confirmed by recruiters.</p>
          </div>
        </div>

        <div className="stats-breakdown-grid">
          <div className="breakdown-card">
            <div className="breakdown-head">
              <h4>Application funnel</h4>
              <span>{totalApplications} total</span>
            </div>
            <div className="progress-row">
              <span>Applied</span>
              <strong>{totalApplications}</strong>
            </div>
            <div className="progress-meter small">
              <div className="progress-fill" style={{ width: `${Math.min(100, totalApplications * 18)}%` }} />
            </div>
            <div className="progress-row">
              <span>Under interview</span>
              <strong>{newInterviews}</strong>
            </div>
            <div className="progress-meter small">
              <div className="progress-fill accent" style={{ width: `${Math.min(100, newInterviews * 25)}%` }} />
            </div>
            <div className="progress-row">
              <span>Offers accepted</span>
              <strong>{acceptedOffers}</strong>
            </div>
            <div className="progress-meter small">
              <div className="progress-fill accent-two" style={{ width: `${Math.min(100, acceptedOffers * 30)}%` }} />
            </div>
          </div>

          <div className="breakdown-card">
            <div className="breakdown-head">
              <h4>Challenge impact</h4>
              <span>{challengeHistory.length} total</span>
            </div>
            <div className="progress-row">
              <span>Participated</span>
              <strong>{challengeHistory.length}</strong>
            </div>
            <div className="progress-meter small">
              <div className="progress-fill" style={{ width: `${Math.min(100, challengeHistory.length * 18)}%` }} />
            </div>
            <div className="progress-row">
              <span>Completed</span>
              <strong>{completedChallenges}</strong>
            </div>
            <div className="progress-meter small">
              <div className="progress-fill accent" style={{ width: `${Math.min(100, completedChallenges * 25)}%` }} />
            </div>
            <div className="progress-row">
              <span>Top 3 finishes</span>
              <strong>{topPlacements}</strong>
            </div>
            <div className="progress-meter small">
              <div className="progress-fill accent-two" style={{ width: `${Math.min(100, topPlacements * 30)}%` }} />
            </div>
          </div>
        </div>

        <div className="stats-activity-grid">
          <div className="activity-card">
            <h4>Latest applications</h4>
            <ul>
              {recentApplications.length > 0 ? (
                recentApplications.map((item) => (
                  <li key={item.id}>
                    <strong>{item.role}</strong> at {item.company}
                    <span className="activity-label">{item.status}</span>
                  </li>
                ))
              ) : (
                <li>No recent applications yet.</li>
              )}
            </ul>
          </div>
          <div className="activity-card">
            <h4>Latest challenges</h4>
            <ul>
              {recentChallenges.length > 0 ? (
                recentChallenges.map((item) => (
                  <li key={item.id}>
                    <strong>{item.title}</strong>
                    <span className="activity-label">{item.status}</span>
                  </li>
                ))
              ) : (
                <li>No recent challenges yet.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
