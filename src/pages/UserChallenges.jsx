import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const COMPANY_CHALLENGES = [
  {
    id: 1,
    company: "Spotify",
    title: "Experience design for next-gen audio",
    reward: "Feedback + fast-track interview",
    deadline: "4 days left",
  },
  {
    id: 2,
    company: "Amazon",
    title: "Growth campaign for student adoption",
    reward: "Stipend and mentorship",
    deadline: "6 days left",
  },
  {
    id: 3,
    company: "IKEA",
    title: "Sustainability in retail design",
    reward: "Project review + networking",
    deadline: "9 days left",
  },
];

export default function UserChallenges() {
  const { user, updateUser } = useContext(AuthContext);
  const joinedIds = user?.challenge_history?.map((item) => item.challenge_id) || [];

  const handleJoinChallenge = async (challenge) => {
    if (!user) return;
    const alreadyJoined = joinedIds.includes(challenge.id);
    if (alreadyJoined) return;

    await updateUser({
      ...user,
      challenge_history: [
        ...(user.challenge_history || []),
        {
          id: Date.now(),
          challenge_id: challenge.id,
          title: challenge.title,
          company: challenge.company,
          status: "Enrolled",
          place: null,
          total_participants: null,
          finished_at: "Pending",
          leaderboard_note: "Waiting for results",
        },
      ],
    });
  };

  return (
    <section className="section challenges-page">
      <div className="section-card">
        <div className="section-head">
          <div>
            <h2>Challenges</h2>
            <p>Participate in company challenges and showcase your skills.</p>
          </div>
          <span className="pill">Live briefs</span>
        </div>

        <div className="challenge-grid">
          {COMPANY_CHALLENGES.map((challenge) => (
            <div key={challenge.id} className="challenge-card challenge-card-rich">
              <div className="challenge-preview">
                <div className="challenge-logo">{challenge.company.charAt(0)}</div>
                <div>
                  <p className="challenge-company">{challenge.company}</p>
                  <span className="challenge-badge">Priority brief</span>
                </div>
              </div>

              <div className="challenge-body">
                <h3>{challenge.title}</h3>
                <p>{challenge.reward}</p>
                <div className="challenge-meta-row">
                  <span className="challenge-deadline">{challenge.deadline}</span>
                  <button
                    className={joinedIds.includes(challenge.id) ? "secondary small" : "primary small"}
                    type="button"
                    disabled={joinedIds.includes(challenge.id)}
                    onClick={() => handleJoinChallenge(challenge)}
                  >
                    {joinedIds.includes(challenge.id) ? "Joined" : "Apply now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
