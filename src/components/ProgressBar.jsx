export default function ProgressBar({ step, total }) {
  const percentage = (step / total) * 100;

  return (
    <div className="progress-wrapper">
      <span className="progress-text">
        STEP {step} OF {total}
      </span>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="progress-percent">{percentage}%</span>
    </div>
  );
}