import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Recruiter.css";
import CandidateCard from "../components/CandidateCard";

const candidates = [
  {
    id: 1,
    name: "Emma Lindgren",
    role: "Growth marketer � paid ads",
    status: "New",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Marco Bianchi",
    role: "APM candidate who actually ships",
    status: "Contacted",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Sofia Romano",
    role: "Brand storyteller with a Gen-Z radar",
    status: "Contacted",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 4,
    name: "David Okoye",
    role: "Full-stack engineer who loves UX",
    status: "Interview",
    avatar: "https://i.pravatar.cc/150?img=56",
  },
  {
    id: 5,
    name: "Kenji Watanabe",
    role: "Data analyst with design mindset",
    status: "Hired",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
];

export default function Recruiter() {
  return (
    <>
      <Navbar />

      <main className="recruiter-page">
        <div className="recruiter-hero">
          <div>
            <span className="section-label">RECRUITER DASHBOARD</span>
            <h1>Your shortlist.</h1>
            <p className="subtitle">
              Everyone you've saved while swiping the feed lives here.
              Move them along the pipeline as you interview.
            </p>
          </div>

          <div className="hero-actions">
            <button className="primary">Swipe more</button>
            <button className="secondary">Browse talent</button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">Shortlisted</span>
            <strong>8</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">In conversation</span>
            <strong>4</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">In interview</span>
            <strong>2</strong>
          </div>
          <div className="stat-card highlight">
            <span className="stat-label">Hired</span>
            <strong>1</strong>
          </div>
        </div>

        <section className="pipeline">
          <PipelineColumn title="New" />
          <PipelineColumn title="Contacted" />
          <PipelineColumn title="Interview" />
          <PipelineColumn title="Hired" />
        </section>
      </main>

      <Footer />
    </>
  );
}

function PipelineColumn({ title }) {
  const stageCandidates = candidates.filter((c) => c.status === title);

  return (
    <div className="pipeline-column">
      <div className="pipeline-header">
        <h4>{title}</h4>
        <span>{stageCandidates.length}</span>
      </div>

      {stageCandidates.length > 0 ? (
        stageCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))
      ) : (
        <div className="candidate-card empty">Empty</div>
      )}
    </div>
  );
}
