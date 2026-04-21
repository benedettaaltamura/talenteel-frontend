import "./CandidateCard.css";

export default function CandidateCard({ candidate }) {
  return (
    <div className="candidate-card-item">

      <div className="candidate-top">
        <img
          src={candidate.avatar}
          alt={candidate.name}
          className="candidate-avatar"
        />

        <div className="candidate-info">
          <strong>{candidate.name}</strong>
          <span>{candidate.role}</span>
        </div>
      </div>

      <div className="candidate-footer">
        <select className="candidate-status" value={candidate.status} readOnly>
          <option>New</option>
          <option>Contacted</option>
          <option>Interview</option>
          <option>Hired</option>
          <option>Passed</option>
        </select>

        <button className="candidate-more">⋯</button>
      </div>

    </div>
  );
}
