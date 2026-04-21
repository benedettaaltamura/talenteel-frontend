// src/components/TalentCard.jsx
import "./TalentCard.css";

export default function TalentCard({ talent }) {
  return (
    <div className="talent-card">

      {/* VIDEO COVER */}
      <div
        className="talent-cover"
        style={{ backgroundImage: `url(${talent.image})` }}
      >
        <span className="badge-open">Open</span>
        <span className="badge-score">★ {talent.score}</span>

        <div className="talent-overlay">
          <strong>
            {talent.name}, {talent.age}
          </strong>
          <span className="talent-headline">
            {talent.headline}
          </span>
        </div>
      </div>

      {/* META */}
      <div className="talent-meta">
        <div className="talent-location">
          {talent.city}, {talent.country}
        </div>
        <div className="talent-grad">
          🎓 {talent.grad}
        </div>
      </div>

      {/* TAGS */}
      <div className="talent-tags">
        {talent.skills.slice(0, 2).map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
        {talent.skills.length > 2 && (
          <span className="tag muted">
            +{talent.skills.length - 2}
          </span>
        )}
      </div>

    </div>
  );
}