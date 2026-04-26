import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function UserProfile() {
  const { user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [skillText, setSkillText] = useState("");
  const [skillDescription, setSkillDescription] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (user?.user_profile) {
      setSkillText(user.user_profile.skills || "");
      setSkillDescription(user.user_profile.skill_description || "");
    }
  }, [user]);

  if (!user) return null;

  const skills = skillText
    ? skillText.split(",").map((skill) => skill.trim()).filter(Boolean)
    : [];

  const applications = user.applications || [];
  const challengeHistory = user.challenge_history || [];

  const handleSaveSkills = async (event) => {
    event.preventDefault();

    await updateUser({
      ...user,
      user_profile: {
        ...user.user_profile,
        skills: skillText.trim(),
        skill_description: skillDescription.trim(),
      },
    });

    setStatusMessage("Skills updated successfully.");
    setIsEditing(false);
    window.setTimeout(() => setStatusMessage(""), 3200);
  };

  return (
    <section className="section profile-page">
      <div className="section-card">
        <div className="section-head">
          <div>
            <h2>Personal profile</h2>
            <p>Keep your talent story sharp and active for every recruiter who visits.</p>
          </div>
          <span className="pill">Skill lab</span>
        </div>

        <div className="profile-hero">
          <div className="profile-hero-copy">
            <h3>Update your skills and describe your strengths.</h3>
            <p>
              Add your core abilities, explain how you use them in real work, and keep your profile current.
            </p>
          </div>

          <div className="profile-visual-grid">
            <div className="visual-card visual-1">
              <span>Top skill</span>
              <strong>Product Design</strong>
            </div>
            <div className="visual-card visual-2">
              <span>Live views</span>
              <strong>1.8k</strong>
            </div>
            <div className="visual-card visual-3">
              <span>Challenge hits</span>
              <strong>12</strong>
            </div>
          </div>
        </div>

        <div className="profile-grid">
          <div className="profile-info-card">
            <h3>Contact</h3>
            <div className="info-row">
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>
            <div className="info-row">
              <span>Role</span>
              <strong>{user.user_profile?.title || "Talent"}</strong>
            </div>
            <div className="info-row">
              <span>Name</span>
              <strong>
                {user.user_profile?.first_name || "-"} {user.user_profile?.last_name || ""}
              </strong>
            </div>
            <div className="info-row">
              <span>Location</span>
              <strong>Europe</strong>
            </div>
          </div>

          <div className="profile-bio-card">
            <h3>About me</h3>
            <p>
              {user.user_profile?.bio ||
                "Add a short personal summary about your strengths and career goals."}
            </p>
            <div className="tag-list">
              {skills.length > 0 ? (
                skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))
              ) : (
                <span className="tag">No skills listed yet</span>
              )}
            </div>
          </div>
        </div>

        <div className="skill-section">
          <div className="skill-section-head">
            <div>
              <h3>Skills toolkit</h3>
              <p>Fill, update and describe the abilities that define your profile.</p>
            </div>
            <button
              type="button"
              className="secondary small"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit skills"}
            </button>
          </div>

          <div className="skill-pill-row">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))
            ) : (
              <span className="skill-empty">Add your first skills to show what you do best.</span>
            )}
          </div>

          <div className="skill-description-block">
            <h4>How I use these skills</h4>
            <p>
              {skillDescription ||
                "Use this space to explain how your strengths make an impact on projects and teams."}
            </p>
          </div>

          {statusMessage && <div className="status-message">{statusMessage}</div>}

          {isEditing && (
            <form className="skill-form" onSubmit={handleSaveSkills}>
              <div className="field">
                <label htmlFor="skillText">Skills</label>
                <input
                  id="skillText"
                  value={skillText}
                  onChange={(e) => setSkillText(e.target.value)}
                  placeholder="e.g. Design, Research, Figma, Product Strategy"
                />
              </div>

              <div className="field">
                <label htmlFor="skillDescription">Skill description</label>
                <textarea
                  id="skillDescription"
                  value={skillDescription}
                  onChange={(e) => setSkillDescription(e.target.value)}
                  rows={4}
                  placeholder="Explain how you apply your skills in your work and what makes your approach unique."
                />
              </div>

              <button className="primary small" type="submit">
                Save changes
              </button>
            </form>
          )}
        </div>

        <div className="profile-section application-section">
          <div className="section-head">
            <div>
              <h3>Job applications</h3>
              <p>Track the roles you've applied to and recruiter updates on interviews.</p>
            </div>
          </div>

          <div className="application-cards">
            {applications.length > 0 ? (
              applications.map((application) => (
                <div key={application.id} className="application-card">
                  <div className="application-info">
                    <div>
                      <h4>{application.role}</h4>
                      <p>{application.company}</p>
                    </div>
                    <span className={`status-badge ${application.status.toLowerCase().replace(/\s+/g, "-")}`}>
                      {application.status}
                    </span>
                  </div>
                  {application.recruiter_note && (
                    <p className="application-note">Recruiter note: {application.recruiter_note}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="section-note">You don't have any recorded applications yet.</p>
            )}
          </div>
        </div>

        <div className="profile-section challenge-section">
          <div className="section-head">
            <div>
              <h3>Challenge history</h3>
              <p>See the challenges you completed and how you ranked on the leaderboard.</p>
            </div>
          </div>

          <div className="challenge-history-list">
            {challengeHistory.length > 0 ? (
              challengeHistory.map((challenge) => (
                <div key={challenge.id} className="challenge-card">
                  <div className="challenge-card-header">
                    <div className="challenge-company-info">
                      <div className="company-logo">{challenge.company?.charAt(0)}</div>
                      <div className="company-details">
                        <h3 className="company-name">{challenge.company}</h3>
                        <p className="company-meta">{challenge.title}</p>
                      </div>
                    </div>
                    <div className="days-left">{challenge.status || "Enrolled"}</div>
                  </div>

                  <div className="challenge-content">
                    <h2 className="challenge-title">{challenge.title}</h2>
                    <p className="challenge-description">
                      {challenge.leaderboard_note || "View your performance and leaderboard position."}
                    </p>
                  </div>

                  <div className="challenge-info-row">
                    <div className="info-section">
                      <label>Placement</label>
                      <p>{challenge.place ? `${challenge.place} / ${challenge.total_participants}` : "Pending"}</p>
                    </div>
                    <div className="info-section">
                      <label>Finished</label>
                      <p>{challenge.finished_at || "TBD"}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="section-note">No completed challenges are available yet.</p>
            )}
          </div>
        </div>

        <div className="links-row">
          {user.user_profile?.github_url && (
            <a href={user.user_profile.github_url} target="_blank" rel="noreferrer" className="link-card">
              GitHub
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
